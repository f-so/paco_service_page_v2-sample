/**
 * Webhook をローカルで待ち受けるサーバー。
 * Stripe CLI の stripe listen --forward-to でこの URL を指定してテストする。
 *
 * 使い方:
 *   1. npm run dev:webhook でこのサーバーを起動
 *   2. 別ターミナルで stripe listen --forward-to http://localhost:4321/api/webhook
 *   3. 表示された whsec_... を .env の STRIPE_WEBHOOK_SECRET に設定してから再度 stripe listen を実行
 *   4. もう一つのターミナルで stripe trigger checkout.session.completed
 */
import { createServer } from "http";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { readFileSync, existsSync } from "fs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

// .env を読み込み
const envPath = join(root, ".env");
if (existsSync(envPath)) {
  const content = readFileSync(envPath, "utf8");
  for (const line of content.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    let value = trimmed.slice(eq + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    if (!(key in process.env)) process.env[key] = value;
  }
}

const PORT = Number(process.env.WEBHOOK_PORT) || 4321;

async function run() {
  // 動的 import で api を読み込み（TS はビルド済み or tsx で別実行を想定）
  const mod = await import("../api/webhook.ts");
  const handler = mod.default?.fetch;
  if (typeof handler !== "function") {
    console.error("api/webhook.ts から fetch ハンドラを読み込めませんでした。");
    process.exit(1);
  }

  const server = createServer(async (req, res) => {
    const url = `http://localhost:${PORT}${req.url || "/"}`;
    const headers = new Headers();
    for (const [k, v] of Object.entries(req.headers)) {
      if (v != null) headers.set(k, Array.isArray(v) ? v.join(", ") : String(v));
    }

    let body = "";
    for await (const chunk of req) body += chunk.toString();
    const request = new Request(url, {
      method: req.method,
      headers,
      body: body || undefined,
    });

    try {
      const response = await handler(request);
      res.writeHead(response.status, Object.fromEntries(response.headers.entries()));
      const text = await response.text();
      res.end(text);
    } catch (err) {
      console.error("Webhook handler error:", err);
      res.writeHead(500, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: "Internal server error" }));
    }
  });

  server.listen(PORT, () => {
    console.log(`Webhook サーバー: http://localhost:${PORT}/api/webhook`);
    console.log(`Stripe CLI: stripe listen --forward-to http://localhost:${PORT}/api/webhook`);
  });
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});

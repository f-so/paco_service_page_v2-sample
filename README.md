# paco_service_page_v2

React + Vite で構築されたサービスページです。

## デプロイ

予算の都合上で森が最後にコミット履歴にする

## 起動方法

### 前提条件

- Node.js がインストールされていること（推奨: v18 以上）

### 開発サーバーの起動

1. 依存パッケージをインストールする

   ```bash
   npm install
   ```

2. 開発サーバーを起動する

   ```bash
   npm run dev
   ```

3. ブラウザで表示する

   起動後、ターミナルに表示される URL（通常は `http://localhost:5173`）にアクセスしてください。

### その他のコマンド

- **ビルド（本番用）**: `npm run build`
- **ビルド結果のプレビュー**: `npm run preview`
- **Lint**: `npm run lint`
- **型チェック**: `npm run type-check`

## Stripe 決済・Webhook

### 導線

「7日無料で試す」等の CTA → 利用規約モーダル → **「同意して始める」** 押下で Stripe チェックアウトページへ遷移します。

### 環境変数

キー・URL は **sedori リポジトリと同じ**ものを利用します。`.env.example` をコピーして `.env` を作成してください。

- **フロント（Vite）**: `.env` の `VITE_STRIPE_CHECKOUT_URL`（sedori の `NEXT_PUBLIC_STRIPE_CHECKOUT_URL` と同じ値）
- **Webhook（Vercel）**: `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`, SMTP 各項目を sedori と同様に設定。本番時は sedori の `.env.production` と同じキー・URLを使用してください。

### Webhook エンドポイント

`api/webhook.ts` が Stripe の Webhook を受け付けます。Vercel にデプロイすると `/api/webhook` が有効になります。

- Stripe ダッシュボードで Webhook の URL を `https://<あなたのドメイン>/api/webhook` に設定してください。
- イベント: `checkout.session.completed`（決済完了時にウェルカムメール送信）、`invoice.payment_succeeded`（必要に応じて処理可能）。

### Vercel デプロイ時の設定

Vercel ダッシュボードの **Settings > Environment Variables** に以下の環境変数を設定してください。

| 変数名 | 値の例 | 説明 |
|---|---|---|
| `STRIPE_SECRET_KEY` | `sk_live_...` | Stripe シークレットキー |
| `STRIPE_WEBHOOK_SECRET` | `whsec_...` | Stripe Webhook 署名シークレット（ダッシュボードのエンドポイント設定から取得） |
| `SMTP_HOST` | `smtp.gmail.com` | SMTP サーバーホスト |
| `SMTP_PORT` | `587` | SMTP ポート番号 |
| `SMTP_SECURE` | `false` | TLS を使う場合は `true` |
| `SMTP_USER` | `reuse.paco@gmail.com` | 送信元メールアドレス兼認証ユーザー |
| `SMTP_PASSWORD` | Gmail アプリパスワード | SMTP 認証パスワード |
| `SMTP_FROM` | `reuse.paco@gmail.com` | 送信元アドレス（省略時は `SMTP_USER` を使用） |

**Stripe Webhook エンドポイントの登録**

1. [Stripe ダッシュボード](https://dashboard.stripe.com/) > Developers > Webhooks > 「エンドポイントを追加」
2. URL: `https://<デプロイ先ドメイン>/api/webhook`
3. イベント: `checkout.session.completed` を選択
4. 作成後に表示される署名シークレット（`whsec_...`）を `STRIPE_WEBHOOK_SECRET` に設定

### Webhook ローカルテスト手順

Stripe 決済完了後のメール送信をローカルで動作確認する手順です。[Stripe CLI](https://stripe.com/docs/stripe-cli) が必要です。

**ターミナル 1: Stripe CLI でイベントを転送**

```bash
STRIPE_SECRET_KEY=$(grep STRIPE_SECRET_KEY .env | cut -d= -f2)
stripe listen --api-key "$STRIPE_SECRET_KEY" --forward-to http://localhost:4321/api/webhook
```

起動すると signing secret が表示される。`.env` の `STRIPE_WEBHOOK_SECRET` と一致していることを確認する。

```
Your webhook signing secret is whsec_xxxxxxxxxxxx
```

**ターミナル 2: Webhook サーバーを起動**

```bash
npx tsx scripts/serve-webhook.js
```

**ターミナル 3: テストイベントを送信**

```bash
STRIPE_SECRET_KEY=$(grep STRIPE_SECRET_KEY .env | cut -d= -f2)
stripe trigger --api-key "$STRIPE_SECRET_KEY" checkout.session.completed
```

**成功の確認**

ターミナル 1 に以下が表示されれば成功。`SMTP_USER` 宛にウェルカムメールが届く。

```
--> checkout.session.completed [evt_xxxxx]
<-- [200] POST http://localhost:4321/api/webhook [evt_xxxxx]
```

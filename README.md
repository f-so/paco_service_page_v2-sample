# paco_service_page_v2

React + Vite で構築されたサービスページです。

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

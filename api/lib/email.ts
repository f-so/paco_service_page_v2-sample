import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

export async function sendWelcomeEmail(toEmail: string, name: string): Promise<void> {
  if (!toEmail) {
    throw new Error("メールアドレスが指定されていません");
  }

  const msg = {
    from: process.env.SMTP_FROM ?? process.env.SMTP_USER,
    to: toEmail,
    subject: "ご登録ありがとうございます",
    text: `${name}様\n\nご登録ありがとうございます。`,
    html: `
      <div style="font-family: sans-serif;">
        <p>${name}様</p>
        <p>ご登録ありがとうございます。</p>
        <p><a href="https://lin.ee/ORf3l7j">こちら</a>から登録したメールアドレスを運営者に送信してください。</p>
        <p>（決済時に設定したメールアドレスと違う場合は認証できません。）</p>
        <br>
        <p>メールのリンクが開けない方はこちらをコピーしてください：https://lin.ee/ORf3l7j</p>
      </div>
    `,
  };

  await transporter.sendMail(msg);
}

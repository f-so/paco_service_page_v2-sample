import Stripe from "stripe";
import { sendWelcomeEmail } from "./lib/email";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "");

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET || "";

async function sendEmail(session: Stripe.Checkout.Session): Promise<void> {
  const emailAddress =
    session.customer_email || session.customer_details?.email;
  if (!emailAddress) {
    throw new Error("No customer email found in session");
  }
  await sendWelcomeEmail(
    emailAddress,
    session.customer_details?.name || "お客様"
  );
}

async function handler(request: Request): Promise<Response> {
  try {
    if (request.method !== "POST") {
      return new Response(JSON.stringify({ error: "Method not allowed" }), {
        status: 405,
        headers: { "Content-Type": "application/json" },
      });
    }

    if (!process.env.STRIPE_SECRET_KEY) {
      console.error("STRIPE_SECRET_KEY is not set");
      return new Response(
        JSON.stringify({ error: "Stripe configuration error" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    if (!endpointSecret) {
      console.error("STRIPE_WEBHOOK_SECRET is not set");
      return new Response(
        JSON.stringify({ error: "Webhook configuration error" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    const body = await request.text();
    const sig = request.headers.get("stripe-signature");
    if (!sig) {
      return new Response(
        JSON.stringify({ error: "No stripe-signature header" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    let event: Stripe.Event;
    try {
      event = stripe.webhooks.constructEvent(body, sig, endpointSecret);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Unknown error";
      console.error("Webhook signature verification failed:", message);
      return new Response(
        JSON.stringify({ error: `Webhook Error: ${message}` }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    try {
      switch (event.type) {
        case "checkout.session.completed": {
          const session = event.data.object as Stripe.Checkout.Session;
          if (
            !process.env.SMTP_HOST ||
            !process.env.SMTP_USER ||
            !process.env.SMTP_PASSWORD
          ) {
            console.error("SMTP environment variables are not properly set");
            return new Response(
              JSON.stringify({ error: "Email service configuration error" }),
              { status: 500, headers: { "Content-Type": "application/json" } }
            );
          }
          await sendEmail(session);
          break;
        }
        case "invoice.payment_succeeded": {
          // 必要に応じて処理を追加
          break;
        }
        default:
          break;
      }
    } catch (err) {
      console.error("Error processing webhook:", err);
      return new Response(
        JSON.stringify({ error: "Internal server error" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    return new Response(JSON.stringify({ received: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Unexpected error:", err);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}

export default { fetch: handler };

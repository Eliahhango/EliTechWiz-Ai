import Stripe from "stripe";

let stripeClient: Stripe | null = null;

function getStripeSecretKey(): string {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) {
    throw new Error("STRIPE_SECRET_KEY is not configured.");
  }
  return key;
}

export function getStripe(): Stripe {
  if (!stripeClient) {
    stripeClient = new Stripe(getStripeSecretKey(), {
      apiVersion: "2026-03-25.dahlia",
    });
  }
  return stripeClient;
}

// Backward-compatible lazy proxy for existing imports (`import { stripe } ...`)
const stripeProxy = new Proxy({} as Stripe, {
  get(_target, prop) {
    const client = getStripe() as any;
    const value = client[prop];
    return typeof value === "function" ? value.bind(client) : value;
  },
});

export { stripeProxy as stripe };

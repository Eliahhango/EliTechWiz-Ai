import "server-only";

import { ConvexHttpClient } from "convex/browser";

let convexClient: ConvexHttpClient | null = null;

function getConvexUrl(): string {
  const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL ?? process.env.CONVEX_URL;
  if (!convexUrl) {
    throw new Error(
      "Convex URL is not configured. Set NEXT_PUBLIC_CONVEX_URL (or CONVEX_URL) in environment variables.",
    );
  }
  return convexUrl;
}

export function getConvexHttpClient(): ConvexHttpClient {
  if (!convexClient) {
    convexClient = new ConvexHttpClient(getConvexUrl());
  }
  return convexClient;
}

export function getConvexServiceRoleKey(): string {
  const key = process.env.CONVEX_SERVICE_ROLE_KEY;
  if (!key) {
    throw new Error(
      "CONVEX_SERVICE_ROLE_KEY is not configured in environment variables.",
    );
  }
  return key;
}

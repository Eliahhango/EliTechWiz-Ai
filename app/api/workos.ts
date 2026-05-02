import { WorkOS } from "@workos-inc/node";

let workosClient: WorkOS | null = null;

function getWorkOSApiKey(): string {
  const key = process.env.WORKOS_API_KEY;
  if (!key) {
    throw new Error("WORKOS_API_KEY is not configured.");
  }
  return key;
}

function getWorkOSClientId(): string {
  const id = process.env.WORKOS_CLIENT_ID;
  if (!id) {
    throw new Error("WORKOS_CLIENT_ID is not configured.");
  }
  return id;
}

export function getWorkOS(): WorkOS {
  if (!workosClient) {
    workosClient = new WorkOS(getWorkOSApiKey(), {
      clientId: getWorkOSClientId(),
    });
  }
  return workosClient;
}

// Backward-compatible lazy proxy for existing imports (`import { workos } ...`)
const workosProxy = new Proxy({} as WorkOS, {
  get(_target, prop) {
    const client = getWorkOS() as any;
    const value = client[prop];
    return typeof value === "function" ? value.bind(client) : value;
  },
});

export { workosProxy as workos };

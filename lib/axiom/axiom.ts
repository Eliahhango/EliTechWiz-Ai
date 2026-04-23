import { Axiom } from "@axiomhq/js";

let axiomClient: Axiom | null = null;

export default function getAxiomClient(): Axiom | null {
  if (axiomClient) return axiomClient;
  const token = process.env.AXIOM_TOKEN;
  if (!token) return null;
  try {
    axiomClient = new Axiom({ token });
    return axiomClient;
  } catch {
    return null;
  }
}

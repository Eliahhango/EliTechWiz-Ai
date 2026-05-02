import getAxiomClient from "@/lib/axiom/axiom";
import { Logger, AxiomJSTransport } from "@axiomhq/logging";
import { nextJsFormatters } from "@axiomhq/nextjs";

const axiomClient = getAxiomClient();
const dataset = process.env.AXIOM_DATASET;

const transports =
  axiomClient && dataset
    ? [
        new AxiomJSTransport({
          axiom: axiomClient,
          dataset,
        }),
      ]
    : [];

export const nextJsAxiomLogger = new Logger({
  transports,
  formatters: nextJsFormatters,
});

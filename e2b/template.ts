import { Template } from "e2b";

export const template = Template()
  .skipCache()
  .fromImage("elitechwiz-ai/sandbox:latest")
  .setWorkdir("/home/user");

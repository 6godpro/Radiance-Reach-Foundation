import { createClient } from "@sanity/client";

export const client = createClient({
    projectId: "hq2iltcz",
    dataset: "production",
    useCdn: true,
    apiVersion: "2025-09-22",
  });

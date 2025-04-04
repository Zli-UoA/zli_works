import { z } from "zod";

export const connpassGroupSchema = z.object({
  id: z.number(),
  subdomain: z.string().nullable(),
  title: z.string(),
  url: z.string(),
});
export type ConnpassGroupSchema = z.infer<typeof connpassGroupSchema>;

export const connpassEventSchema = z.object({
  id: z.number(),
  title: z.string(),
  catch: z.string().nullable(),
  description: z.string(),
  url: z.string(),
  image_url: z.string().nullable(),
  hash_tag: z.string().nullable(),
  started_at: z.string().nullable(),
  ended_at: z.string().nullable(),
  limit: z.number().nullable(),
  event_type: z.enum(["participation", "advertisement"]),
  open_status: z.enum(["preopen", "open", "close", "cancelled"]),
  group: connpassGroupSchema.nullable(),
  address: z.string().nullable(),
  place: z.string().nullable(),
  lat: z.union([z.number(), z.string(), z.null()]),
  lon: z.union([z.number(), z.string(), z.null()]),
  owner_id: z.union([z.number(), z.null()]),
  owner_nickname: z.string(),
  owner_display_name: z.string(),
  accepted: z.number(),
  waiting: z.number(),
  updated_at: z.string(),
});
export type ConnpassEventSchema = z.infer<typeof connpassEventSchema>;

const connpassEventsSchema = z.object({
  events: z.array(connpassEventSchema),
  results_available: z.number(),
  results_returned: z.number(),
  results_start: z.number(),
});
type ConnpassEventsSchema = z.infer<typeof connpassEventsSchema>;

type Page = {
  start: number;
  count: number;
};

const connpassAPIFetcher = (url: URL, env: CloudflareEnvironment) =>
  fetch(url, {
    headers: {
      "X-API-Key": env["X-API-Key"],
    },
    cf: {
      cacheEverything: true,
    },
  });

export const getConnpassEvents = async (
  env: CloudflareEnvironment,
  page: Page,
): Promise<ConnpassEventsSchema | null> => {
  const url = new URL("https://connpass.com/api/v2/events");
  const queryParams = new URLSearchParams({
    subdomain: "zli",
    order: "2", // 開催日時順
    start: page.start.toString(),
    count: page.count.toString(),
  });
  url.search = queryParams.toString();

  const response = await connpassAPIFetcher(url, env);
  if (!response.ok) {
    console.error("Error fetching data:", response.statusText);
    return null;
  }

  const data = await response.json();
  const result = connpassEventsSchema.safeParse(data);
  if (!result.success) {
    console.error("Validation error:", result.error);
    return null;
  }

  return result.data;
};

export const getConnpassEventPreOpen = async (
  env: CloudflareEnvironment,
): Promise<ConnpassEventSchema[] | null> => {
  const url = new URL("https://connpass.com/api/v2/events");
  const queryParams = new URLSearchParams({
    subdomain: "zli",
    order: "2", // 開催日時順
    start: "0",
    count: "10",
  });
  url.search = queryParams.toString();

  const response = await connpassAPIFetcher(url, env);
  if (!response.ok) {
    console.error("Error fetching data:", response.statusText);
    return null;
  }

  const data = await response.json();
  const result = connpassEventsSchema.safeParse(data);
  if (!result.success) {
    console.error("Validation error:", result.error);
    return null;
  }

  const preOpenEvents = result.data.events
    .filter((event) => event.open_status === "preopen")
    .toReversed();
  if (preOpenEvents.length === 0) {
    return [];
  }

  return preOpenEvents;
};

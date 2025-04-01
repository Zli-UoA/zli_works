export type ConnpassGroup = {
  id: number;
  subdomain: string | null;
  title: string;
  url: string;
};

export type ConnpassEvent = {
  id: number;
  title: string;
  catch: string | null;
  description: string;
  url: string;
  image_url: string | null;
  hash_tag: string | null;
  started_at: string | null;
  ended_at: string | null;
  limit: number | null;
  event_type: "participation" | "advertisement";
  open_status: "preopen" | "open" | "close" | "cancelled";
  series: ConnpassGroup | null;
  address: string | null;
  place: string | null;
  lat: number | string | null;
  lon: number | string | null;
  owner_id: number | null;
  owner_nickname: string;
  owner_display_name: string;
  accepted: number;
  waiting: number;
  updated_at: string;
};

const mockData: { events: ConnpassEvent[] } = {
  events: [
    {
      id: 349133,
      title: "Aizu Hack / Re:Aizu Hack",
      catch: "学び、挑戦し、成長するハッカソン。",
      description: "",
      url: "https://zli.connpass.com/event/349133/",
      image_url:
        "https://media.connpass.com/thumbs/cf/9b/cf9b8698e53cafb17da32841489af5fc.png",
      hash_tag: "",
      started_at: "2025-06-14T00:00:00+09:00",
      ended_at: "2025-06-22T23:30:00+09:00",
      limit: 0,
      event_type: "participation",
      open_status: "preopen",
      series: null,
      address: "福島県会津若松市一箕町大字鶴賀上居合90",
      place: "会津若松市一箕町大字鶴賀上居合90",
      lat: 0,
      lon: 0,
      owner_id: 0,
      owner_nickname: "",
      owner_display_name: "",
      accepted: 0,
      waiting: 0,
      updated_at: "",
    },
  ],
};

export const getConnpassEvents = async () => {
  return mockData.events;
};

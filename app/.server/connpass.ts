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
      id: 364,
      title: "BPStudy#56",
      catch: "株式会社ビープラウドが主催するWeb系技術討論の会",
      description:
        "今回は「Python プロフェッショナル　プログラミング」執筆プロジェクトの継続的ビルドについて、お話しして頂きます。",
      url: "https://bpstudy.connpass.com/event/364/",
      image_url:
        "https://media.connpass.com/thumbs/fe/f1/fef1f5fc84d164e7690c5b76df97e6cb.png",
      hash_tag: "bpstudy",
      started_at: "2012-04-17T18:30:00+09:00",
      ended_at: "2012-04-17T20:30:00+09:00",
      limit: 80,
      event_type: "participation",
      open_status: "preopen",
      series: {
        id: 1,
        subdomain: "bpstudy",
        title: "BPStudy",
        url: "https://bpstudy.connpass.com/",
      },
      address: "東京都豊島区東池袋3-1-1",
      place: "BPオフィス (サンシャイン60 45階)",
      lat: "35.729402000000",
      lon: "139.718209000000",
      owner_id: 8,
      owner_nickname: "haru860",
      owner_display_name: "佐藤 治夫",
      accepted: 80,
      waiting: 15,
      updated_at: "2012-03-20T12:07:32+09:00",
    },
    {
      id: 364,
      title: "BPStudy#56",
      catch: "株式会社ビープラウドが主催するWeb系技術討論の会",
      description:
        "今回は「Python プロフェッショナル　プログラミング」執筆プロジェクトの継続的ビルドについて、お話しして頂きます。",
      url: "https://bpstudy.connpass.com/event/364/",
      image_url:
        "https://media.connpass.com/thumbs/fe/f1/fef1f5fc84d164e7690c5b76df97e6cb.png",
      hash_tag: "bpstudy",
      started_at: "2012-04-17T18:30:00+09:00",
      ended_at: "2012-04-17T20:30:00+09:00",
      limit: 80,
      event_type: "participation",
      open_status: "preopen",
      series: {
        id: 1,
        subdomain: "bpstudy",
        title: "BPStudy",
        url: "https://bpstudy.connpass.com/",
      },
      address: "東京都豊島区東池袋3-1-1",
      place: "BPオフィス (サンシャイン60 45階)",
      lat: "35.729402000000",
      lon: "139.718209000000",
      owner_id: 8,
      owner_nickname: "haru860",
      owner_display_name: "佐藤 治夫",
      accepted: 80,
      waiting: 15,
      updated_at: "2012-03-20T12:07:32+09:00",
    },
    {
      id: 364,
      title: "BPStudy#56",
      catch: "株式会社ビープラウドが主催するWeb系技術討論の会",
      description:
        "今回は「Python プロフェッショナル　プログラミング」執筆プロジェクトの継続的ビルドについて、お話しして頂きます。",
      url: "https://bpstudy.connpass.com/event/364/",
      image_url:
        "https://media.connpass.com/thumbs/fe/f1/fef1f5fc84d164e7690c5b76df97e6cb.png",
      hash_tag: "bpstudy",
      started_at: "2012-04-17T18:30:00+09:00",
      ended_at: "2012-04-17T20:30:00+09:00",
      limit: 80,
      event_type: "participation",
      open_status: "preopen",
      series: {
        id: 1,
        subdomain: "bpstudy",
        title: "BPStudy",
        url: "https://bpstudy.connpass.com/",
      },
      address: "東京都豊島区東池袋3-1-1",
      place: "BPオフィス (サンシャイン60 45階)",
      lat: "35.729402000000",
      lon: "139.718209000000",
      owner_id: 8,
      owner_nickname: "haru860",
      owner_display_name: "佐藤 治夫",
      accepted: 80,
      waiting: 15,
      updated_at: "2012-03-20T12:07:32+09:00",
    },
  ],
};

export const getConnpassEvents = async () => {
  return mockData.events;
};

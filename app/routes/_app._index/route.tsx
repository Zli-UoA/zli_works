import { LuArrowRight, LuBook, LuMic, LuStar } from "react-icons/lu";
import { Link, href } from "react-router";
import { getConnpassEventPreOpen } from "~/.server/connpass";
import { Button } from "~/components/ui/button";
import type { Route } from "./+types/route";
import { Card } from "./card";
import { EventCard } from "./eventCard";

export const loader = async ({ context }: Route.LoaderArgs) => {
  const events = await getConnpassEventPreOpen(context.cloudflare.env);
  return { events };
};

export default ({ loaderData }: Route.ComponentProps) => {
  return (
    <div className="min-h-screen bg-brand-secondary">
      <div className="relative overflow-hidden bg-brand-dark text-brand-light">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="pt-10 mx-auto max-w-7xl px-4 sm:pt-12 sm:px-6 md:pt-16 lg:pt-20 lg:px-8 xl:pt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
                  <span className="block">技術好きのための</span>
                  <span className="block text-brand-primary">ハブを作る</span>
                </h1>
                <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Zli(ジライ)はLT会やハッカソンを主催する会津大学公認の総合技術系サークルです。
                </p>
                <div className="flex flex-col gap-4 mt-5 justify-center sm:flex-row lg:justify-start">
                  <Button
                    asChild
                    size="lg"
                    className="text-lg h-14 w-full sm:w-fit"
                  >
                    <Link to={href("/join")}>
                      参加する
                      <LuArrowRight />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="ghost"
                    className="text-lg h-14 w-full sm:w-fit"
                  >
                    <a href="https://forms.gle/7KVrev2REB6BBBb78">連絡する</a>
                  </Button>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <svg
            className="hidden lg:block absolute left-0 inset-y-0 h-full w-96 text-brand-dark -translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>
          <img
            src="/onsen.png"
            alt="温泉合宿の写真"
            className="h-56 w-full bg-brand-secondary sm:h-72 md:h-96 lg:w-full lg:h-full flex items-center justify-center overflow-hidden object-cover"
          />
        </div>
      </div>
      <div className="flex flex-col gap-20 px-4 py-20 max-w-7xl mx-auto">
        <section className="flex flex-col gap-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-brand-light mb-4">
              主なイベント
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              様々なイベントを開催し、部員同士の交流と技術力の向上に努めています。
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card
              icon={<LuMic className="w-8 h-8" />}
              title="LT会"
              description="企業を招待して行なう大LTをはじめ、月に1度の学内LTや他大学とのLT会など、メンバーがアウトプットをする場を提供します。"
            />
            <Card
              icon={<LuBook className="w-8 h-8" />}
              title="勉強会"
              description="メンバーが自分の得意な分野や気になっている言語など、一緒に勉強したい仲間を集めて勉強会を開催します。"
            />
            <Card
              icon={<LuStar className="w-8 h-8" />}
              title="ハッカソン"
              description="主に学生主体でハッカソンを開催します。新入部員に開発をするきっかけを与え、成長を促します。"
            />
          </div>
        </section>
        {loaderData.events && (
          <section className="flex flex-col gap-16">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-brand-light mb-4">
                開催前のイベント
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                ぜひご参加ください！
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {loaderData.events.map((event) => {
                  return (
                    <EventCard
                      key={event.id}
                      title={event.title}
                      ccatch={event.catch ?? ""}
                      url={event.url}
                      image={event.image_url ?? ""}
                      status={event.open_status}
                      date={event.started_at}
                    />
                  );
                })}
              </div>
              <div className="flex justify-end">
                <Button asChild variant="link">
                  <a
                    href="https://zli.connpass.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    すべてのイベントを見る
                    <LuArrowRight />
                  </a>
                </Button>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

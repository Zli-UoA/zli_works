import { LuArrowRight } from "react-icons/lu";
import { Link, href } from "react-router";
import { Button } from "./ui/button";

export const Hero = () => {
  return (
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
              <div className="gap-4 mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <Button asChild size="lg">
                  <Link to={href("/join/form")}>
                    参加する
                    <LuArrowRight />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="ghost">
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
  );
};

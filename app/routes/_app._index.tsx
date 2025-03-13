import { LuBook, LuMic, LuStar } from "react-icons/lu";
import { Card } from "~/components/card";
import { Footer } from "~/components/footer";
import { Hero } from "~/components/hero";

export default () => {
  return (
    <div className="min-h-screen bg-brand-secondary">
      <Hero />
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
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
      <Footer />
    </div>
  );
};

import { Logo } from "~/components/logo";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import isolation from "./assets/isolation.png";
import minimum from "./assets/minimum.png";
import { Button } from "~/components/ui/button";
import { href, Link } from "react-router";

export default () => {
  return (
    <div className="min-h-screen bg-brand-light">
      <div className="bg-brand-secondary text-brand-light flex flex-col items-start gap-16 py-20">
        <div className="w-full max-w-7xl mx-auto px-4 flex flex-col gap-16">
          {/* Hero Section */}
          <section>
            <h1 className="text-5xl font-bold mb-4">Zli Brand Guidelines</h1>
            <p className="text-xl">Zliのロゴを正しく使用するために</p>
          </section>

          {/* Logo Section */}
          <section className="flex flex-col gap-8">
            <h2 className="text-3xl font-bold">Logo</h2>
            <div className="grid grid-col-1 md:grid-cols-3 gap-8">
              <Card>
                <CardContent>
                  <div className="flex items-center justify-center p-16 rounded-sm border-2 bg-[#2c2c2c]">
                    <Logo />
                  </div>
                </CardContent>
                <CardHeader>
                  <CardTitle>Primary</CardTitle>
                </CardHeader>
              </Card>

              <Card>
                <CardContent>
                  <div className="flex items-center justify-center p-16 rounded-sm border-2 bg-[#d9d9d9]">
                    <Logo variant="secondary_dark" />
                  </div>
                </CardContent>
                <CardHeader>
                  <CardTitle>Secondary Dark</CardTitle>
                </CardHeader>
              </Card>

              <Card>
                <CardContent>
                  <div className="flex items-center justify-center p-16 rounded-sm border-2 bg-[#2c2c2c]">
                    <Logo variant="secondary_light" />
                  </div>
                </CardContent>
                <CardHeader>
                  <CardTitle>Secondary Light</CardTitle>
                </CardHeader>
              </Card>
            </div>
          </section>

          {/* Color Section */}
          <section className="flex flex-col gap-8">
            <h2 className="text-3xl font-bold ">Color</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardContent>
                  <div className="w-full h-32 rounded-sm border-2 bg-[#ffd600]" />
                </CardContent>
                <CardHeader>
                  <CardDescription>#FFD600</CardDescription>
                  <CardTitle>Yellow</CardTitle>
                </CardHeader>
              </Card>

              <Card>
                <CardContent>
                  <div className="w-full h-32 rounded-sm border-2 bg-[#d9d9d9]" />
                </CardContent>
                <CardHeader>
                  <CardDescription>#D9D9D9</CardDescription>
                  <CardTitle>White</CardTitle>
                </CardHeader>
              </Card>

              <Card>
                <CardContent>
                  <div className="w-full h-32 rounded-sm border-2 bg-[#2c2c2c]" />
                </CardContent>
                <CardHeader>
                  <CardDescription>#2C2C2C</CardDescription>
                  <CardTitle>Black</CardTitle>
                </CardHeader>
              </Card>
            </div>
          </section>

          {/* Clear Space and Minimum Height Section */}
          <section className="flex flex-col gap-8">
            <h2 className="text-3xl font-bold">
              Clear Space and Minimum Height
            </h2>
            <div className="grid grid-cols-1 grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>クリアスペース</CardTitle>
                </CardHeader>
                <CardContent>
                  <img
                    src={isolation}
                    alt="isolation"
                    className="rounded-sm border-2"
                  />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Minimum Height</CardTitle>
                </CardHeader>
                <CardContent>
                  <img
                    src={minimum}
                    alt="minimum Height"
                    className="rounded-sm border-2"
                  />
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Download Section */}
          <section className="flex flex-col gap-8">
            <h2 className="text-3xl font-bold">Download</h2>
            <Card>
              <CardHeader>
                <CardTitle>ロゴアセット</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Button asChild variant="secondary">
                    <a href="/public/logo_png.zip" download>
                      PNG ダウンロード
                    </a>
                  </Button>
                  <Button asChild variant="secondary">
                    <a href="/public/logo_svg.zip" download>
                      SVG ダウンロード
                    </a>
                  </Button>
                  <Button asChild>
                    <a href="/public/logo_all.zip" download>
                      全てダウンロード
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Contact Section */}
          <section className="flex flex-col gap-8">
            <h2 className="text-3xl font-bold">Contact</h2>
            ご質問がありますか？
            <br />
            ブランドガイドラインについてご不明な点がございましたら、お気軽にお問い合わせください。
            <Button asChild variant="link">
              <Link to={href("/contact")}>お問い合わせ</Link>
            </Button>
          </section>
        </div>
      </div>
    </div>
  );
};

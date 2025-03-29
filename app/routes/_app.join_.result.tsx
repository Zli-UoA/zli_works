import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

export default () => {
  return (
    <div className="min-h-screen bg-brand-secondary text-brand-light">
      <div className="py-20 px-4 max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-bold">Zli入部フォーム</CardTitle>
            <CardDescription className="space-y-3">
              学内メールにSlackの招待リンクを送りました！
            </CardDescription>
          </CardHeader>
          {/* この後やることとか書く */}
        </Card>
      </div>
    </div>
  );
};

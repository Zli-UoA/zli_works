import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

export default () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-bold">Zli入部フォーム</CardTitle>
        <CardDescription className="space-y-3">
          学内メールにSlackの招待リンクを送りました！
        </CardDescription>
      </CardHeader>
      {/* この後やることとか書く */}
    </Card>
  );
};

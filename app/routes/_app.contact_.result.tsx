import {
  Card,
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
            <CardTitle className="text-xl font-bold">
              お問い合わせフォーム
            </CardTitle>
            <CardDescription className="space-y-3">
              送信しました！返信をお待ちください。
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
};

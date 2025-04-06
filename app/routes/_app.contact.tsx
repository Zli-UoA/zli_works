import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { type SubmitHandler, useForm } from "react-hook-form";
import { LuArrowRight, LuLoaderCircle } from "react-icons/lu";
import { href, useNavigate, useSubmit } from "react-router";
import { z } from "zod";
import { sendMail } from "~/.server/mail";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";
import type { Route } from "./+types/_app.join";

const formSchema = z.object({
  email: z.string().min(1, "このフィールドは必須です").email(),
  name: z.string().min(1, "このフィールドは必須です"),
  content: z.string().min(1, "このフィールドは必須です"),
});

const MailContent = ({
  email,
  name,
  content,
}: {
  email: string;
  name: string;
  content: string;
}) => {
  return (
    <div>
      <div>
        {name}様({email})からお問い合わせです。
      </div>
      <div>{content}</div>
    </div>
  );
};

export const action = async ({ request, context }: Route.ActionArgs) => {
  const parsed = await formSchema.safeParseAsync(await request.json());

  if (!parsed.success) {
    throw parsed.error;
  }
  const { data } = parsed;

  await sendMail(
    context.cloudflare.env,
    data.email,
    data.name,
    <MailContent email={data.email} name={data.name} content={data.content} />,
  );
};

export default () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      content: "",
    },
  });

  const navigate = useNavigate();
  const submit = useSubmit();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit: SubmitHandler<z.infer<typeof formSchema>> = async (
    values,
  ) => {
    setIsLoading(true);
    await submit(values, { method: "post", encType: "application/json" });
    setIsLoading(false);
    await navigate(href("/contact/result"));
  };

  return (
    <div className="min-h-screen bg-brand-secondary text-brand-light">
      <div className="py-20 px-4 max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-bold">
              お問い合わせフォーム
            </CardTitle>
            <CardDescription className="space-y-3">
              ご入力いただいたメールアドレスに返信します。
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <div className="space-y-6">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        <span className="text-destructive">*</span>
                        メールアドレス
                      </FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        <span className="text-destructive">*</span>
                        名前
                      </FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="content"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        <span className="text-destructive">*</span>内容
                      </FormLabel>
                      <FormControl>
                        <Textarea {...field} className="h-64" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </Form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <span className="text-destructive">* 必須のフィールド</span>
            <div>
              <Button
                onClick={() => form.reset()}
                variant="ghost"
                className="w-1/2 md:w-fit"
                disabled={isLoading}
              >
                リセット
              </Button>
              <Button
                onClick={form.handleSubmit(onSubmit)}
                className="w-1/2 md:w-fit"
                disabled={isLoading}
              >
                送信
                {isLoading ? (
                  <LuLoaderCircle className="animate-spin" />
                ) : (
                  <LuArrowRight />
                )}
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

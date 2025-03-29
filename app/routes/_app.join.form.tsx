import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { type SubmitHandler, useForm } from "react-hook-form";
import { LuArrowRight, LuLoaderCircle } from "react-icons/lu";
import { href, useNavigate, useSubmit } from "react-router";
import { z } from "zod";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Checkbox } from "~/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import type { Route } from "./+types/_app.join.form";

const formSchema = z
  .object({
    id: z.string().min(1, "このフィールドは必須です"),
    name: z.string().min(1, "このフィールドは必須です"),
    nickname: z.string(),
    route: z.array(
      z.enum(["twitter", "poster", "senior", "classmate", "other"]),
    ),
    otherRoute: z.string(),
  })
  .refine(
    ({ route, otherRoute }) => !(route.includes("other") && otherRoute === ""),
    {
      message: "このフィールドは必須です",
      path: ["otherRoute"],
    },
  );

export const action = async ({ request, context }: Route.ActionArgs) => {
  const parsed = await formSchema.safeParseAsync(await request.json());

  if (!parsed.success) {
    throw parsed.error;
  }
  const { data } = parsed;

  // 仮
  const routes: Record<(typeof data.route)[number], string> = {
    twitter: "Twitter",
    poster: "学内のポスター",
    senior: "先輩からの紹介",
    classmate: "同期からの紹介",
    other: "__other_option__",
  };

  const formData = new FormData();
  formData.append("entry.1956564833", data.id);
  formData.append("entry.1653699625", data.name);
  formData.append("entry.904110866", data.nickname);
  data.route.map((route) => {
    if (route === "other") {
      formData.append(
        "entry.1472435256.other_option_response",
        data.otherRoute,
      );
    }
    formData.append("entry.1472435256", routes[route]);
  });

  formData.append("entry.1472435256_sentinel", "");

  const response = await fetch(
    "https://docs.google.com/forms/u/0/d/e/1FAIpQLSekps0jSt15D1T3aJNPQqmNs4otNMu2mzN65ebTKu5cvNcgfw/formResponse",
    { method: "post", body: formData },
  );

  console.log(response);
};

const checkboxItems: {
  id: z.infer<typeof formSchema>["route"][number];
  label: string;
}[] = [
  {
    id: "twitter",
    label: "学内のポスター",
  },
  { id: "senior", label: "先輩からの紹介" },
  { id: "classmate", label: "同期からの紹介" },
  { id: "other", label: "その他" },
];

export default () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id: "",
      name: "",
      nickname: "",
      route: [],
      otherRoute: "",
    },
  });

  const route = form.watch("route");

  const navigate = useNavigate();
  const submit = useSubmit();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit: SubmitHandler<z.infer<typeof formSchema>> = async (
    values,
  ) => {
    setIsLoading(true);
    await submit(values, { method: "post", encType: "application/json" });
    setIsLoading(false);
    await navigate(href("/join/result"));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-bold">Zli入部フォーム</CardTitle>
        <CardDescription className="space-y-3">
          学内メールにSlackの招待リンクが送られます
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <div className="space-y-6">
            <FormField
              control={form.control}
              name="id"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    <span className="text-destructive">*</span>
                    学籍番号
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
                    <span className="text-destructive">*</span>名前
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
              name="nickname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>ニックネーム / ハンドルネーム</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="route"
              render={() => (
                <FormItem className="space-y-3">
                  <FormLabel>Zliを何で知りましたか</FormLabel>
                  {checkboxItems.map((item) => (
                    <FormField
                      key={item.id}
                      control={form.control}
                      name="route"
                      render={({ field }) => (
                        <FormItem>
                          <div className="flex flex-row space-x-3">
                            <FormControl>
                              <Checkbox
                                checked={field.value.includes(item.id)}
                                onCheckedChange={(checked) => {
                                  if (checked) {
                                    field.onChange([...field.value, item.id]);
                                  } else {
                                    field.onChange(
                                      field.value.filter((v) => v !== item.id),
                                    );
                                  }
                                }}
                              />
                            </FormControl>
                            <FormLabel>{item.label}</FormLabel>
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  ))}
                  <FormMessage />
                </FormItem>
              )}
            />
            {route.includes("other") && (
              <FormField
                control={form.control}
                name="otherRoute"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>その他 Zliを知った方法</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
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
  );
};

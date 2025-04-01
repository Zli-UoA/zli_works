import { LuCalendar } from "react-icons/lu";
import type { ConnpassEvent } from "~/.server/connpass";
import { Badge } from "~/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

type Props = {
  title: string;
  ccatch: string;
  url: string;
  image: string;
  status: ConnpassEvent["open_status"];
  date: string | null;
};

const displayStatus = (status: ConnpassEvent["open_status"]) => {
  switch (status) {
    case "preopen": {
      return <Badge>開催前</Badge>;
    }
    case "open": {
      return <Badge>開催中</Badge>;
    }
    case "close": {
      return <Badge>終了</Badge>;
    }
    case "cancelled": {
      return <Badge>中止</Badge>;
    }
    default: {
      const _: never = status;
      throw new Error("status is invalid");
    }
  }
};

const formatter = Intl.DateTimeFormat("ja-JP", {
  dateStyle: "long",
  timeStyle: "short",
});

const displayDate = (dateString: string) => {
  const date = new Date(dateString);
  const formattedDate = formatter.format(date);
  return formattedDate;
};

export const EventCard = ({
  title,
  ccatch,
  url,
  image,
  status,
  date,
}: Props) => {
  return (
    <a href={url}>
      <Card className="flex flex-col sm:flex-row gap-4 sm:h-48 w-full border-none">
        <img
          src={image}
          alt={`${title}の画像`}
          className="aspect-[22/9] sm:aspect-square object-cover w-full sm:w-48 -mt-6 sm:-my-6 rounded-t-xl sm:rounded-t-none sm:rounded-l-xl"
        />
        <div className="flex flex-col justify-between gap-2 w-full">
          <CardHeader>
            <CardTitle className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-xl">
                {displayStatus(status)}
                {title}
              </div>
              <div>{ccatch}</div>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-row items-center gap-2">
            <LuCalendar />
            <div className="text-sm text-muted-foreground ">
              {date == null ? "--" : displayDate(date)}
            </div>
          </CardContent>
        </div>
      </Card>
    </a>
  );
};

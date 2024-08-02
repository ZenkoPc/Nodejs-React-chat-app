import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { PlusIcon } from "lucide-react";
import { useTranslation } from "react-i18next";

interface props {
  groupName: string;
  members: string;
  desc: string;
}

export function Room(props: props) {

  const { t } = useTranslation()

  return (
    <>
      <Card className="border border-black/70 bg-black/50 shadow-none hover:bg-black/40 hover:border-white hover:border transition-all">
        <CardHeader className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Avatar className="w-8 h-8 border">
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>AC</AvatarFallback>
            </Avatar>
            <div className="text-sm font-medium text-white">
              {props.groupName}
            </div>
          </div>
          <div className="text-sm text-muted-foreground">
            {`${props.members} ${t('PopularChatsMembers')}`}
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{props.desc}</p>
        </CardContent>
        <CardFooter className="flex justify-between items-center">
          <div className="text-sm capitalize text-muted-foreground">
            {t('PopularChatsJoinNow')}
          </div>
          <Button variant="ghost" size="icon" className="text-white transition-all hover:text-black">
            <PlusIcon className="h-4 w-4" />
            <span className="sr-only">Join</span>
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}

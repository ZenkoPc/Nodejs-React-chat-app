import { HeroJoin } from "./joinchat/hero";
import { JoinCharacteristics } from "./joinchat/characteristics";
import { RecommendedRooms } from "./joinchat/rooms";
import { JoinTryout } from "./joinchat/tryout";
import { Helmet } from "react-helmet";

export function JoinChat() {
  return (
    <>
      <Helmet>
        <title>Join a new chat - Chat app</title>
        <meta
          name="description"
          content="A chat app to chat with another people xd"
        />
      </Helmet>
      <HeroJoin />
      <JoinCharacteristics />
      <RecommendedRooms />
      <JoinTryout />
    </>
  );
}

import { HeroJoin } from "./joinchat/hero";
import { JoinCharacteristics } from "./joinchat/characteristics";
import { RecommendedRooms } from "./joinchat/rooms";
import { JoinTryout } from "./joinchat/tryout";
import { Helmet } from "react-helmet";

export function JoinChat() {
  return (
    <>
      <Helmet>
        <title>Join a chat - Chat app</title>
        <meta
          name="description"
          content="Join a chat with Chat app, your ultimate communication hub! Join existing chats effortlessly and stay connected with instant messaging, multimedia sharing, high-quality video and voice calls, and secure group chats. Experience seamless communication with end-to-end encryption and cloud sync. Get started now!"
        />
      </Helmet>
      <HeroJoin />
      <JoinCharacteristics />
      <RecommendedRooms />
      <JoinTryout />
    </>
  );
}

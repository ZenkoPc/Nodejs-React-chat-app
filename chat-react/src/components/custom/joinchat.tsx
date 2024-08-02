import { HeroJoin } from "./joinchat/hero";
import { JoinCharacteristics } from "./joinchat/characteristics";
import { RecommendedRooms } from "./joinchat/rooms";
import { JoinTryout } from "./joinchat/tryout";

export function JoinChat() {
  return (
    <>
      <HeroJoin />
      <JoinCharacteristics />
      <RecommendedRooms />
      <JoinTryout />
    </>
  );
}

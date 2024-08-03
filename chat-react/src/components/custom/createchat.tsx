import { Helmet } from "react-helmet";
import { FourtFeature } from "./createchat/fourtfeature";
import { HeroCreate } from "./createchat/hero";
import { MainCharacteristic } from "./createchat/maincharacteristic";
import { SecondFeature } from "./createchat/secondfeature";
import { ThirdFeature } from "./createchat/thirdfeature";

export function CreateChat() {
  return (
    <>
      <Helmet>
        <title>Create a new chat - Chat app</title>
        <meta
          name="description"
          content="Create a chat with Chat app, your ultimate communication hub! Start new chats effortlessly and stay connected with instant messaging, multimedia sharing, high-quality video and voice calls, and secure group chats. Experience seamless communication with end-to-end encryption and cloud sync. Get started now!"
        />
      </Helmet>
      <HeroCreate />
      <MainCharacteristic />
      <SecondFeature />
      <ThirdFeature />
      <FourtFeature />
    </>
  );
}

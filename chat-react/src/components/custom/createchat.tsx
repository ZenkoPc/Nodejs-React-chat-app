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
          content="A chat app to chat with another people xd"
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

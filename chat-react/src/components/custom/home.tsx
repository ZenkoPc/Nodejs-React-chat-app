import { Chat } from "./home/chat";
import { Features } from "./home/features";
import { Hero } from "./home/hero";
import { SliderLogos } from "./home/slider";
import { Tryout } from "./home/tryout";
import { Helmet } from "react-helmet";

export function Home() {
  return (
    <>
      <Helmet>
        <title>Home - Chat app</title>
        <meta
          name="description"
          content="A chat app to chat with another people xd"
        />
      </Helmet>
      <Hero />
      <SliderLogos />
      <Features />
      <Chat />
      <Tryout />
    </>
  );
}

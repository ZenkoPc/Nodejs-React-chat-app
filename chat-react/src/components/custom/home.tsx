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
          content="Stay connected with Chat app, the all-in-one messaging app for instant messaging, multimedia sharing, video and voice calls, group chats, and more. Enjoy secure, seamless communication with end-to-end encryption and cloud sync. Download now!"
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

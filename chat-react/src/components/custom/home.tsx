import { Chat } from "./home/chat";
import { Features } from "./home/features";
import { Hero } from "./home/hero";
import { SliderLogos } from "./home/slider";
import { Tryout } from "./home/tryout";

export function Home(){
    return(
        <>
            <Hero />
            <SliderLogos />
            <Features />
            <Chat />
            <Tryout />
        </>
    )
}
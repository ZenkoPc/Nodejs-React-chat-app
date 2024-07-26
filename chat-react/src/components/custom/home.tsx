import { Chat } from "./chat";
import { Features } from "./features";
import { Hero } from "./hero";
import { SliderLogos } from "./slider";
import { Tryout } from "./tryout";

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
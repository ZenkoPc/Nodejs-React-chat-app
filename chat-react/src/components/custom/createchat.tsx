import { FourtFeature } from "./createchat/fourtfeature";
import { HeroCreate } from "./createchat/hero";
import { MainCharacteristic } from "./createchat/maincharacteristic";
import { SecondFeature } from "./createchat/secondfeature";
import { ThirdFeature } from "./createchat/thirdfeature";

export function CreateChat(){
    return(
        <>
            <HeroCreate />
            <MainCharacteristic />
            <SecondFeature />
            <ThirdFeature />
            <FourtFeature />
        </>
    )
}
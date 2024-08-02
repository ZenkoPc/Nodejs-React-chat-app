import { useTranslation } from "react-i18next";
import { Room } from "./shared/room";

export function RecommendedRooms(){

    const { t } = useTranslation()

    return(
        <>
            <section className="w-full py-12 md:py-24 lg:py-32">
                <div className="container px-4 md:px-6 space-y-12">
                    <div className="text-center space-y-3">
                    <h2 className="text-3xl text-white font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        {t('PopularChatsTitle')}
                    </h2>
                    <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        {t('PopularChatsDesc')}
                    </p>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        <Room 
                            desc={t('PopularChats1Desc')}
                            groupName="Tech Enthusiasts"
                            members="1.2K"
                        />
                        <Room 
                            desc={t('PopularChats2Desc')}
                            groupName="Book Lovers"
                            members="850"
                        />
                        <Room 
                            desc={t('PopularChats3Desc')}
                            groupName="Fitness Fanatics"
                            members="1.8K"
                        />
                        <Room 
                            desc={t('PopularChats4Desc')}
                            groupName="Foodies Unite"
                            members="2.3K"
                        />
                        <Room 
                            desc={t('PopularChats5Desc')}
                            groupName="Travel Enthusiasts"
                            members="1.5K"
                        />
                        <Room 
                            desc={t('PopularChats6Desc')}
                            groupName="Gamers Lounge"
                            members="3.1K"
                        />
                    </div>
                </div>
            </section>
        </>
    )
}
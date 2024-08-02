import { CheckIcon } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export function HeroJoin(){

    const { t } = useTranslation()

    return(
        <>
            <section className="w-full overflow-hidden pt-12 md:pt-24 lg:pt-32 border-y">
                <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
                    <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
                    <div>
                        <h1 className="lg:leading-tighter text-white text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                            {t('JoinChatHeroTitle')}
                        </h1>
                        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                            {t('JoinChatHeroDesc')}
                        </p>
                        <div className="space-x-4 mt-6">
                        <Link
                            to="#"
                            className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-white text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                        >
                            {t('JoinChatHeroButton1')}
                        </Link>
                        <Link
                            to="#"
                            className="inline-flex bg-white h-9 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1
                            text-black focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 capitalize"
                        >
                            {t('JoinChatHeroButton2')}
                        </Link>
                        </div>
                    </div>
                    <div className="flex flex-col items-start space-y-4">
                        <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                            {t('JoinChatHeroPill')}
                        </div>
                        <div className="grid gap-4">
                        <div className="flex items-start gap-4">
                            <CheckIcon className="text-primary text-white h-6 w-6" />
                            <div>
                            <h3 className="text-lg font-medium text-white">
                                {t('JoinChatHeroFeature1Title')}
                            </h3>
                            <p className="text-muted-foreground">
                                {t('JoinChatHeroFeature1Desc')}
                            </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <CheckIcon className="text-primary text-white h-6 w-6" />
                            <div>
                            <h3 className="text-lg font-medium text-white">
                                {t('JoinChatHeroFeature2Title')}
                            </h3>
                            <p className="text-muted-foreground">
                                {t('JoinChatHeroFeature2Desc')}
                            </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <CheckIcon className="text-primary text-white h-6 w-6" />
                            <div>
                            <h3 className="text-lg font-medium text-white">
                                {t('JoinChatHeroFeature3Title')}
                            </h3>
                            <p className="text-muted-foreground">
                                {t('JoinChatHeroFeature3Desc')}
                            </p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <img
                    src="/placeholder.svg"
                    width="1270"
                    height="300"
                    alt="Hero"
                    className="mx-auto aspect-[3/1] overflow-hidden rounded-t-xl object-cover"
                    />
                </div>
            </section>
        </>
    )
}
import RealTyper from "@real-typer/react";
import { motion } from "framer-motion";
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
                        <RealTyper
                            strings={t('JoinChatHeroTitle')}
                            loop={false}
                            typeSpeed={50}
                            deleteSpeed={0}
                            holdDelay={0}
                            startDelay={0}
                            loopStartIndex={0}
                            loopHold={0}
                            delete={false}
                            deleteLastString={false}
                            pauseDelay={0}
                            callback={() => {}}
                            callbackArgs={undefined}
                            developerMode={false}
                            cursorCharacter={"|"}
                            cursorBlink={true}
                            classes="text-3xl text-white font-bold tracking-tighter sm:text-5xl xl:text-6xl/none dark:text-foreground"
                        />
                        <motion.p 
                            transition={{ duration: 1 }}
                            initial={{ x: "-100%" }}
                            viewport={{ once: true }}
                            whileInView={{ x: 0 }}
                            exit={{ x: "100%" }}
                            className="mx-auto mt-7 max-w-[700px] text-muted-foreground md:text-xl">
                            {t('JoinChatHeroDesc')}
                        </motion.p>
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
                        <motion.div 
                            transition={{ duration: 1 }}
                            initial={{ x: "200%" }}
                            viewport={{ once: true }}
                            whileInView={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                            {t('JoinChatHeroPill')}
                        </motion.div>
                        <div className="grid gap-4">
                        <motion.div 
                            transition={{ duration: 1 }}
                            initial={{ x: "100%" }}
                            viewport={{ once: true }}
                            whileInView={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            className="flex items-start gap-4">
                            <CheckIcon className="text-primary text-white h-6 w-6" />
                            <div>
                                <h3 className="text-lg font-medium text-white">
                                    {t('JoinChatHeroFeature1Title')}
                                </h3>
                                <p className="text-muted-foreground">
                                    {t('JoinChatHeroFeature1Desc')}
                                </p>
                            </div>
                        </motion.div>
                        <motion.div 
                            transition={{ duration: 1, delay: 0.15 }}
                            initial={{ x: "100%" }}
                            viewport={{ once: true }}
                            whileInView={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            className="flex items-start gap-4"
                        >
                            <CheckIcon className="text-primary text-white h-6 w-6" />
                            <div>
                            <h3 className="text-lg font-medium text-white">
                                {t('JoinChatHeroFeature2Title')}
                            </h3>
                            <p className="text-muted-foreground">
                                {t('JoinChatHeroFeature2Desc')}
                            </p>
                            </div>
                        </motion.div>
                        <motion.div 
                            transition={{ duration: 1, delay: 0.3 }}
                            initial={{ x: "100%" }}
                            viewport={{ once: true }}
                            whileInView={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            className="flex items-start gap-4"
                        >
                            <CheckIcon className="text-primary text-white h-6 w-6" />
                            <div>
                            <h3 className="text-lg font-medium text-white">
                                {t('JoinChatHeroFeature3Title')}
                            </h3>
                            <p className="text-muted-foreground">
                                {t('JoinChatHeroFeature3Desc')}
                            </p>
                            </div>
                        </motion.div>
                        </div>
                    </div>
                    </div>
                    <motion.img
                        transition={{ duration: 1 }}
                        initial={{ y: "50%" }}
                        viewport={{ once: true }}
                        whileInView={{ y: 0 }}
                        exit={{ y: "-100%" }}
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
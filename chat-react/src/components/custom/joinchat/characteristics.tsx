import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"
import { ExperienceItem } from "./shared/experience"

export function JoinCharacteristics(){

    const { t } = useTranslation()

    return(
        <>
            <section className="w-full overflow-hidden bg-gradient-to-r from-slate-800/50 via-slate-500/50 to-slate-900/50 py-12 md:py-24 lg:py-32">
                <div className="container space-y-12 px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <motion.div 
                            transition={{ duration: 1 }}
                            initial={{ y: "40%" }}
                            viewport={{ once: true }}
                            whileInView={{ y: 0 }}
                            exit={{ y: "-100%" }}
                            className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                            {t('JoinChatCharacteristicsPill')}
                        </motion.div>
                        <motion.h2 
                            transition={{ duration: 1 }}
                            initial={{ x: "100%" }}
                            viewport={{ once: true }}
                            whileInView={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            className="text-3xl text-white font-bold tracking-tighter sm:text-5xl">
                            {t('JoinChatCharacteristicsTitle')}
                        </motion.h2>
                        <motion.p 
                            transition={{ duration: 1 }}
                            initial={{ x: "-100%" }}
                            viewport={{ once: true }}
                            whileInView={{ x: 0 }}
                            exit={{ x: "100%" }}
                            className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        {t('JoinChatCharacteristicsDesc')}
                        </motion.p>
                    </div>
                    </div>
                    <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
                        <ExperienceItem
                            title={t('JoinChatCharacteristics1Title')}
                            desc={t('JoinChatCharacteristics1Desc')}
                        />
                        <ExperienceItem
                            title={t('JoinChatCharacteristics2Title')}
                            desc={t('JoinChatCharacteristics2Desc')}
                        />
                        <ExperienceItem
                            title={t('JoinChatCharacteristics3Title')}
                            desc={t('JoinChatCharacteristics3Desc')}
                        />
                        <ExperienceItem
                            title={t('JoinChatCharacteristics4Title')}
                            desc={t('JoinChatCharacteristics4Desc')}
                        />
                        <ExperienceItem
                            title={t('JoinChatCharacteristics5Title')}
                            desc={t('JoinChatCharacteristics5Desc')}
                        />
                    </div>
                </div>
            </section>
        </>
    )
}
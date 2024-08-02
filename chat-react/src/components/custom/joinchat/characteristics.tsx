import { useTranslation } from "react-i18next"

export function JoinCharacteristics(){

    const { t } = useTranslation()

    return(
        <>
            <section className="w-full bg-gradient-to-r from-slate-800/50 via-slate-500/50 to-slate-900/50 py-12 md:py-24 lg:py-32">
                <div className="container space-y-12 px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                            {t('JoinChatCharacteristicsPill')}
                        </div>
                        <h2 className="text-3xl text-white font-bold tracking-tighter sm:text-5xl">
                            {t('JoinChatCharacteristicsTitle')}
                        </h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        {t('JoinChatCharacteristicsDesc')}
                        </p>
                    </div>
                    </div>
                    <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
                    <div className="grid gap-1">
                        <h3 className="text-lg font-bold text-white">
                            {t('JoinChatCharacteristics1Title')}
                        </h3>
                        <p className="text-muted-foreground">
                            {t('JoinChatCharacteristics1Desc')}
                        </p>
                    </div>
                    <div className="grid gap-1">
                        <h3 className="text-lg font-bold text-white">
                            {t('JoinChatCharacteristics2Title')}
                        </h3>
                        <p className="text-muted-foreground">
                            {t('JoinChatCharacteristics2Desc')}
                        </p>
                    </div>
                    <div className="grid gap-1">
                        <h3 className="text-lg font-bold text-white">
                            {t('JoinChatCharacteristics3Title')}
                        </h3>
                        <p className="text-muted-foreground">
                            {t('JoinChatCharacteristics3Desc')}
                        </p>
                    </div>
                    <div className="grid gap-1">
                        <h3 className="text-lg font-bold text-white">
                            {t('JoinChatCharacteristics4Title')}
                        </h3>
                        <p className="text-muted-foreground">
                            {t('JoinChatCharacteristics4Desc')}
                        </p>
                    </div>
                    <div className="grid gap-1">
                        <h3 className="text-lg font-bold text-white">
                            {t('JoinChatCharacteristics5Title')}
                        </h3>
                        <p className="text-muted-foreground">
                            {t('JoinChatCharacteristics5Desc')}   
                        </p>
                    </div>
                    </div>
                </div>
            </section>
        </>
    )
}
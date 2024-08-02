import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

export function JoinTryout(){

    const { t } = useTranslation()

    return(
        <>
            <section className="w-full  py-12 md:py-24 lg:py-32">
                <div className="container px-4 md:px-6 space-y-6 text-center">
                    <h2 className="text-3xl text-white font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        {t('PopularChatsTryoutTitle')}
                    </h2>
                    <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        {t('PopularChatsTryoutDesc')}
                    </p>
                    <div>
                    <Button size="lg">
                        {t('PopularChatsTryoutButton')}
                    </Button>
                    </div>
                </div>
            </section>
        </>
    )
}
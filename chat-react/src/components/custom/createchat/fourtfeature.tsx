import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

export function FourtFeature(){

    const { t } = useTranslation()

    return(
        <>
            <section className="text-primary-foreground py-12 md:py-16 lg:py-20">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                            {t('5thNewChatTitle')}
                        </h2>
                        <p className="text-lg text-muted-foreground md:text-xl lg:text-2xl mb-8">
                            {t('5thNewChatDesc')}
                        </p>
                        <div className="flex gap-4">
                        <Button variant="outline">
                            {t('5thNewChatButton1')}
                        </Button>
                        <Button>
                            {t('5thNewChatButton2')}
                        </Button>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <img src="/placeholder.svg" width={600} height={400} alt="Benefits" className="rounded-xl" />
                    </div>
                    </div>
                </div>
            </section>
        </>
    )
}
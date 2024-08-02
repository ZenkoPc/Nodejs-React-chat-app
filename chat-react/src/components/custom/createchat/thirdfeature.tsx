import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

export function ThirdFeature(){

    const { t } = useTranslation()

    return(
        <>
            <section className="py-12 bg-primary/60 md:py-16 lg:py-20">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                        <img
                        src="/placeholder.svg"
                        width={600}
                        height={400}
                        alt="Collaboration Features"
                        className="rounded-xl"
                        />
                    </div>
                    <div>
                        <h2 className="text-2xl text-white md:text-3xl lg:text-4xl font-bold mb-4">
                            {t('4thNewChatTitle')}
                        </h2>
                        <p className="text-lg text-muted-foreground md:text-xl lg:text-2xl mb-8">
                            {t('4thNewChatDesc')}
                        </p>
                        <Button variant="outline" className="text-white">
                            {t('4thNewChatButton')}
                        </Button>
                    </div>
                    </div>
                </div>
            </section>
        </>
    )
}
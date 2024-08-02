import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

export function MainCharacteristic(){

    const { t } = useTranslation()

    return(
        <>
            <section className="py-12 bg-primary/60 md:py-16 lg:py-20">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                        <img src="/placeholder.svg" width={600} height={400} alt="Room Creation" className="rounded-xl" />
                    </div>
                    <div>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-white">
                            {t('2ndNewChatTitle')}
                        </h2>
                        <p className="text-lg md:text-xl lg:text-2xl mb-8 text-muted-foreground">
                            {t('2ndNewChatDesc')}
                        </p>
                        <Button variant="outline" className="text-white">
                            {t('2ndNewChatButton')}
                        </Button>
                    </div>
                    </div>
                </div>
            </section>
        </>
    )
}
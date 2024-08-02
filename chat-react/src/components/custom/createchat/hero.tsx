import { useTranslation } from "react-i18next";
import { Button } from "../../ui/button";

export function HeroCreate(){

    const { t } = useTranslation()

    return(
        <>
            <section className="text-primary-foreground py-12 md:py-16 lg:py-20">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                            {t('1stNewChatTitle')}
                        </h1>
                        <p className="text-lg md:text-xl lg:text-2xl mb-8 text-muted-foreground">
                            {t('1stNewChatDesc')}
                        </p>
                        <div className="flex gap-4">
                        <Button variant="outline">
                            {t('1stNewChatButton1')}
                        </Button>
                        <Button>
                            {t('1stNewChatButton2')}
                        </Button>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <img src="/placeholder.svg" width={600} height={400} alt="Chat Room" className="rounded-xl" />
                    </div>
                    </div>
                </div>
            </section>
        </>
    )
}
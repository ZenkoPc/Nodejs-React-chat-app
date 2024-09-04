import { useTranslation } from "react-i18next";
import { Button } from "../../ui/button";
import { motion } from 'framer-motion';
import RealTyper from "@real-typer/react";

export function HeroCreate(){

    const { t } = useTranslation()

    return(
        <>
            <section className="text-primary-foreground py-12 md:py-16 lg:py-20 overflow-hidden">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                        <RealTyper
                            strings={[t("1stNewChatTitle")]}
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
                            classes="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
                        />
                        <motion.p 
                            transition={{ duration: 0.6}}
                            initial={{ y: "100%", opacity: "0" }}
                            viewport={{ once: true }}
                            whileInView={{ y: "0%", opacity: "1" }}
                            exit={{ y: "-100%", opacity: "0" }}
                            className="text-lg md:text-xl lg:text-2xl mb-8 text-muted-foreground">
                            {t('1stNewChatDesc')}
                        </motion.p>
                        <motion.div 
                            transition={{ duration: 0.8}}
                            initial={{ x: "-20%" }}
                            viewport={{ once: true }}
                            whileInView={{ x: "0" }}
                            exit={{ x: "20%" }}
                            className="flex gap-4">
                        <Button variant="outline">
                            {t('1stNewChatButton1')}
                        </Button>
                        <Button>
                            {t('1stNewChatButton2')}
                        </Button>
                        </motion.div>
                    </div>
                    <div className="hidden md:block">
                        <motion.img 
                            transition={{ duration: 0.5, delay: 0.1 }}
                            initial={{ x: "100%" }}
                            viewport={{ once: true }}
                            whileInView={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            src="/placeholder.svg" width={600} height={400} alt="Chat Room" className="rounded-xl" />
                    </div>
                    </div>
                </div>
            </section>
        </>
    )
}
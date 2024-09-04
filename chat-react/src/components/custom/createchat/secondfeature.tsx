import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export function SecondFeature(){

    const { t } = useTranslation()

    return(
        <>
            <section className="py-12 overflow-hidden md:py-16 lg:py-20">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                        <motion.h2 
                            transition={{ duration: 0.5, delay: 0.1 }}
                            initial={{ x: "-100%" }}
                            viewport={{ once: true }}
                            whileInView={{ x: 0 }}
                            exit={{ x: "100%" }}
                            className="text-2xl text-white md:text-3xl lg:text-4xl font-bold mb-4">
                            {t('3rdNewChatTitle')}
                        </motion.h2>
                        <motion.p 
                            transition={{ duration: 0.5, delay: 0.1 }}
                            initial={{ x: "-100%" }}
                            viewport={{ once: true }}
                            whileInView={{ x: 0 }}
                            exit={{ x: "100%" }}
                            className="text-lg text-muted-foreground md:text-xl lg:text-2xl mb-8">
                            {t('3rdNewChatDesc')}
                        </motion.p>
                        <div className="flex gap-4">
                        <Button variant="outline" className="text-white">
                            {t('3rdNewChatButton1')}
                        </Button>
                        <Button>
                            {t('3rdNewChatButton2')}
                        </Button>
                        </div>
                    </div>
                    <div>
                        <motion.img 
                            transition={{ duration: 0.5, delay: 0.1 }}
                            initial={{ x: "100%" }}
                            viewport={{ once: true }}
                            whileInView={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            src="/placeholder.svg" width={600} height={400} alt="Room Management" className="rounded-xl" />
                    </div>
                    </div>
                </div>
            </section>
        </>
    )
}
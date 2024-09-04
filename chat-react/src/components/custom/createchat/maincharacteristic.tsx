import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { motion } from 'framer-motion';

export function MainCharacteristic(){

    const { t } = useTranslation()

    return(
        <>
            <section className="py-12 overflow-hidden bg-primary/60 md:py-16 lg:py-20">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                        <motion.img
                            transition={{ duration: 0.5, delay: 0.1 }}
                            initial={{ x: "-100%" }}
                            viewport={{ once: true }}
                            whileInView={{ x: 0 }}
                            exit={{ x: "100%" }}
                            src="/placeholder.svg" width={600} height={400} alt="Room Creation" className="rounded-xl" 
                        />
                    </div>
                    <div>
                        <motion.h2 
                            transition={{ duration: 1 }}
                            initial={{ x: "100%" }}
                            viewport={{ once: true }}
                            whileInView={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-white">
                            {t('2ndNewChatTitle')}
                        </motion.h2>
                        <motion.p 
                            transition={{ duration: 1 }}
                            initial={{ x: "100%" }}
                            viewport={{ once: true }}
                            whileInView={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            className="text-lg md:text-xl lg:text-2xl mb-8 text-muted-foreground">
                            {t('2ndNewChatDesc')}
                        </motion.p>
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
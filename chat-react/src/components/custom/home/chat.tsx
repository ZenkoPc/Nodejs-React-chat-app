import { useTranslation } from "react-i18next";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../../ui/card";
import { motion } from "framer-motion";
import { Message } from "./shared/message";

export function Chat(){

  const { t } = useTranslation()

    return(
        <>
        <section className="w-full overflow-hidden py-12 md:py-24 lg:py-32 bg-gradient-to-r from-[#ffd700] to-[#1e90ff] dark:from-[#1f2937] dark:to-[#111827]">
          <motion.div 
            transition={{ duration: 0.5 }}
            initial={{ x: "-100%" }}
            exit={{ x: "100%" }}
            viewport={{ once: true }}
            whileInView={{ x: 0 }}
            className="container px-4 md:px-6"
          >
            <Card className="h-[500px] w-full max-w-4xl mx-auto rounded-2xl dark:bg-card dark:text-card-foreground">
              <CardHeader>
                <CardTitle className="dark:text-foreground">
                  {t('ChatTitle')}
                </CardTitle>
                <CardDescription className="dark:text-muted-foreground">
                  {t('ChatDesc')}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 overflow-y-auto">
                <div className="flex flex-col gap-4">
                  <Message 
                    avatar="😁"
                    hour="2:39pm"
                    message={t('1stTextChat')}
                    username="max"
                    reactions={['🔥 12','😍 2','👍 1']}
                    active={true}
                  />
                  <Message 
                    avatar="😎"
                    hour="2:40pm"
                    message={t('2ndTextChat')}
                    username="alex"
                    reactions={['😍 2','👍 1']}
                    active={false}
                  />
                  <Message 
                    avatar="🤠"
                    hour="2:41pm"
                    message={t('3rdTextChat')}
                    username="sarah"
                    reactions={['😍 2']}
                    active={false}
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </section>
        </>
    )
}
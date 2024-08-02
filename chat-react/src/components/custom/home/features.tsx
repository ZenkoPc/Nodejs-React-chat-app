import { CalendarIcon, FileIcon, MessageCircleIcon, SearchIcon, SignalIcon, VideoIcon } from "@/utils/getIcons";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Feature } from "./shared/feature";

export function Features(){

  const { t } = useTranslation()

    return(
        <>
          <section className={`w-full overflow-hidden py-12 md:py-24 lg:py-32 ${/*bg-gradient-to-r from-[#ffd700] to-[#1e90ff] dark:from-[#1f2937] dark:to-[#111827]*/''}`}>
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <motion.div 
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  initial={{ x: "-200%" }}
                  exit={{ x: "200%" }}
                  whileInView={{ x: 0 }}
                  className="inline-block rounded-lg bg-muted px-3 py-1 text-sm dark:bg-muted dark:text-muted-foreground"
                >
                  {t('FeaturesPill')}
                </motion.div>
                <motion.h2 
                  transition={{ duration: 0.4 }}
                  initial={{ x: "10%" }}
                  viewport={{ once: true }}
                  exit={{ x: "-10%" }}
                  whileInView={{ x: 0 }}
                  className="text-3xl text-white font-bold tracking-tighter sm:text-5xl dark:text-foreground"
                >
                  {t('FeaturesTitle')}
                </motion.h2>
                <motion.p 
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  initial={{ x: "-10%" }}
                  exit={{ x: "10%" }}
                  whileInView={{ x: 0 }}
                  className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-muted-foreground"
                >
                  {t('FeaturesDesc')}
                </motion.p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Feature 
                icon={<MessageCircleIcon />}
                title={t('1stFeatureTitle')}
                desc={t('1stFeatureDesc')}
              />
              <Feature 
                icon={<FileIcon />}
                title={t('2ndFeatureTitle')}
                desc={t('2ndFeatureDesc')}
              />
              <Feature 
                icon={<SignalIcon />}
                title={t('3rdFeatureTitle')}
                desc={t('3rdFeatureDesc')}
              />
              <Feature 
                icon={<SearchIcon />}
                title={t('4thFeatureTitle')}
                desc={t('4thFeatureDesc')}
              />
              <Feature 
                icon={<VideoIcon />}
                title={t('5thFeatureTitle')}
                desc={t('5thFeatureDesc')}
              />
              <Feature 
                icon={<CalendarIcon />}
                title={t('6thFeatureTitle')}
                desc={t('6thFeatureDesc')}
              />
            </div>
          </div>
        </section>
      </>
    )
}
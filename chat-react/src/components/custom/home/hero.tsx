import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import RealTyper from "@real-typer/react";

export function Hero() {
  const { t } = useTranslation();

  return (
    <>
      <section className="w-full flex justify-center overflow-hidden py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2 flex flex-col gap-5">
                <RealTyper
                  strings={[t("PrimaryTitle")]}
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
                  classes="text-3xl text-white font-bold tracking-tighter sm:text-5xl xl:text-6xl/none dark:text-foreground"
                />
                <RealTyper
                  strings={[t("PrimaryDesc")]}
                  loop={false}
                  typeSpeed={20}
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
                  cursorCharacter={""}
                  cursorBlink={false}
                  classes="max-w-[600px] text-muted-foreground md:text-xl dark:text-muted-foreground"
                />
              </div>
              <motion.div 
                transition={{ duration: 0.8}}
                initial={{ x: "-100%" }}
                viewport={{ once: true }}
                whileInView={{ x: "0" }}
                exit={{ x: "100%" }}
                className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  to="#"
                  className="inline-flex border border-slate-800 hover:border-white transition-all h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 capitalize"
                >
                  {t("GetStarted")}
                </Link>
                <Link
                  to="#"
                  className="inline-flex capitalize bg-white h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 dark:border-muted dark:bg-background dark:hover:bg-muted dark:hover:text-muted-foreground"
                >
                  {t("LearnMore")}
                </Link>
              </motion.div>
            </div>
            <motion.img
              transition={{ duration: 0.5, delay: 0.1 }}
              initial={{ x: "100%" }}
              viewport={{ once: true }}
              whileInView={{ x: 0 }}
              exit={{ x: "-100%" }}
              src="/placeholder.svg"
              width="550"
              height="550"
              alt="Hero"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-bottom sm:w-full lg:order-last lg:aspect-square"
            />
          </div>
        </div>
      </section>
    </>
  );
}

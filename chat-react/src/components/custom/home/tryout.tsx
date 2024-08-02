import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export function Tryout() {

  const { t } = useTranslation()

  return (
    <>
      <section
        className={`w-full overflow-hidden py-12 md:py-24 lg:py-32 ${
          /*bg-gradient-to-r from-[#ff6b6b] to-[#ffa500] dark:from-[#1f2937] dark:to-[#111827]*/ ""
        }`}
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <motion.div
                transition={{ duration: 0.5 }}
                initial={{ x: "-100%" }}
                exit={{ x: "100%" }}
                whileInView={{ x: 0 }}
                viewport={{ once: true }}
                className="inline-block rounded-lg bg-muted px-3 py-1 text-sm dark:bg-muted dark:text-muted-foreground"
              >
                {t('TryoutPill')}
              </motion.div>
              <motion.h2
                transition={{ duration: 0.5 }}
                initial={{ x: "100%" }}
                exit={{ x: "-100%" }}
                whileInView={{ x: 0 }}
                viewport={{ once: true }}
                className="text-3xl text-white font-bold tracking-tighter sm:text-5xl dark:text-foreground"
              >
                {t('TryoutTitle')}
              </motion.h2>
              <motion.p
                transition={{ duration: 0.5 }}
                initial={{ x: "-100%" }}
                exit={{ x: "100%" }}
                whileInView={{ x: 0 }}
                viewport={{ once: true }}
                className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-muted-foreground"
              >
                {t('TryoutDesc')}
              </motion.p>
            </div>
            <motion.img
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              initial={{ rotate: 30, opacity: 0 }}
              exit={{ rotate: 30, opacity: 0 }}
              whileInView={{ rotate: 0, opacity: 1 }}
              src="/placeholder.svg"
              width={600}
              height={400}
              alt="Video Calls"
              className="rounded-lg"
            />
            <motion.div
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              initial={{ y: "200%" }}
              exit={{ y: "-200%" }}
              whileInView={{ y: 0 }}
              className="flex flex-col gap-2 min-[400px]:flex-row"
            >
              <Link
                to="#"
                className="inline-flex capitalize h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                {t('TryoutButton1')}
              </Link>
              <Link
                to="#"
                className="inline-flex bg-white h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 dark:border-muted dark:bg-background dark:hover:bg-muted dark:hover:text-muted-foreground"
              >
                {t('TryoutButton2')}
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

import { motion } from "framer-motion"

interface Props{
    title: string
    desc: string
}

export function ExperienceItem (Props: Props) {

    return (
        <>
            <div className="grid gap-1">
                <motion.h3 
                    transition={{ duration: 1 }}
                    initial={{ x: "-100%" }}
                    viewport={{ once: true }}
                    whileInView={{ x: 0 }}
                    exit={{ x: "100%" }}
                    className="text-lg font-bold text-white">
                    {Props.title}
                </motion.h3>
                <motion.p 
                    transition={{ duration: 1 }}
                    initial={{ x: "100%" }}
                    viewport={{ once: true }}
                    whileInView={{ x: 0 }}
                    exit={{ x: "-100%" }}
                    className="text-muted-foreground">
                    {Props.desc}
                </motion.p>
            </div>
        </>
    )

}
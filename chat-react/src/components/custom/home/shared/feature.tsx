import { motion } from 'framer-motion'

interface props{
    icon: React.ReactElement
    title: string
    desc: string
}

export function Feature(props: props){
    return(
        <>
            <motion.div 
                transition={{ duration: 0.5, delay: 0.3 }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1 }}
                className="grid gap-1"
              >
                <div className="flex items-center gap-2">
                  <div className="rounded-lg bg-secondary p-2 text-secondary-foreground dark:bg-secondary dark:text-secondary-foreground">
                    {props.icon}
                  </div>
                  <h3 className="text-lg font-bold dark:text-foreground text-white">
                    {props.title}
                  </h3>
                </div>
                <p className="text-muted-foreground dark:text-muted-foreground">
                  {props.desc}
                </p>
              </motion.div>
        </>
    )
}
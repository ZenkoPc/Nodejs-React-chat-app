import Slider from 'react-infinite-logo-slider'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

export function SliderLogos(){

    const { t } = useTranslation()

    return(
        <section className='mx-auto my-10 flex flex-col gap-20 items-center w-full overflow-hidden text-white max-w-5xl'>
            <motion.h1 
                whileInView={{ x: 0, y: 0, opacity: 1 }}
                initial={{ x: "100%", y: "100%", opacity: 0 }}  
                exit={{ x: "-100%", y: "-100%" }} 
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-5xl text-white font-bold tracking-tighter dark:text-foreground"
            >
                {t('TechUsed')}
            </motion.h1>
            <motion.div 
                whileInView={{ x: 0, y: 0, opacity: 1 }}
                initial={{ x: "-10%", y: "100%", opacity: 0 }}  
                exit={{ x: "10%", y: "-100%" }} 
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className='border-y-2 py-4 box relative'
            >
            <Slider
                width='280px'
                duration={20}
                pauseOnHover={false}
                blurBorders={false}
            >
                <Slider.Slide>
                    <img className='w-24' src="react-2.svg" alt="react-logo" />
                </Slider.Slide>
                <Slider.Slide>
                    <img className='w-24' src="typescript.svg" alt="typescript-logo" />
                </Slider.Slide>
                <Slider.Slide>
                    <img className='w-36' src="tailwindcss.svg" alt="tailwind-css-1-logo" />
                </Slider.Slide>
                <Slider.Slide>
                    <img className='w-44' src="react-router-stacked-color-inverted.svg" alt="react-router-color-inverted-logo" />
                </Slider.Slide>
                <Slider.Slide>
                    <img className='w-44' src="nodejs.svg" alt="nodejs-logo" />
                </Slider.Slide>
                <Slider.Slide>
                    <img className='w-44 bg-slate-100 p-4' src="express-109.svg" alt="express-109-logo" />
                </Slider.Slide>
                <Slider.Slide>
                    <img className='w-44' src="jwtio-json-web-token.svg" alt="jwtio-json-web-token-logo" />
                </Slider.Slide>
                <Slider.Slide>
                    <img className='w-24' src="socket-io.svg" alt="socket-io-logo" />
                </Slider.Slide>
                <Slider.Slide>
                    <img className='w-24' src="mysql-2.svg" alt="mysql-2-logo" />
                </Slider.Slide>
            </Slider>
            </motion.div>
        </section>
    )
}
import Slider from 'react-infinite-logo-slider'

export function SliderLogos(){
    return(
        <section className='mx-auto flex flex-col gap-32 items-center w-full overflow-hidden text-white max-w-5xl'>
            <h1 className="text-5xl text-white font-bold tracking-tighter dark:text-foreground">
                Technologies used:
            </h1>
            <Slider
                width='450px'
                duration={10}
                pauseOnHover={false}
                blurBorders={false}
            >
                <Slider.Slide>
                    <div>
                        asd
                    </div>
                </Slider.Slide>
                <Slider.Slide>
                    <div>
                        asdf
                    </div>
                </Slider.Slide>
            </Slider>
        </section>
    )
}
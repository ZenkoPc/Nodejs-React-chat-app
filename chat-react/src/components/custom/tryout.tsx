import { Link } from "react-router-dom";

export function Tryout(){
    return(
        <>
        <section className={`w-full py-12 md:py-24 lg:py-32 ${/*bg-gradient-to-r from-[#ff6b6b] to-[#ffa500] dark:from-[#1f2937] dark:to-[#111827]*/ ''}`}>
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm dark:bg-muted dark:text-muted-foreground">
                  Future Feature
                </div>
                <h2 className="text-3xl text-white font-bold tracking-tighter sm:text-5xl dark:text-foreground">
                  Introducing Video Calls
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-muted-foreground">
                  Seamlessly transition from chat to video calls for more engaging team collaboration.
                </p>
              </div>
              <img src="/placeholder.svg" width={600} height={400} alt="Video Calls" className="rounded-lg" />
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  to="#"
                  className="inline-flex capitalize h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  Active notifications
                </Link>
                <Link
                  to="#"
                  className="inline-flex bg-white h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 dark:border-muted dark:bg-background dark:hover:bg-muted dark:hover:text-muted-foreground"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>
        </>
    )
}
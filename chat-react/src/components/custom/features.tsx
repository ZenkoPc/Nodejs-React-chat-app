import { CalendarIcon, FileIcon, MessageCircleIcon, SearchIcon, SignalIcon, VideoIcon } from "@/utils/getIcons";

export function Features(){
    return(
        <>
        <section className={`w-full py-12 md:py-24 lg:py-32 ${/*bg-gradient-to-r from-[#ffd700] to-[#1e90ff] dark:from-[#1f2937] dark:to-[#111827]*/''}`}>
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm dark:bg-muted dark:text-muted-foreground">
                  Key Features
                </div>
                <h2 className="text-3xl text-white font-bold tracking-tighter sm:text-5xl dark:text-foreground">
                  Powerful Features to Boost Productivity
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-muted-foreground">
                  Streamline your team's communication with our cutting-edge chat app features.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="grid gap-1">
                <div className="flex items-center gap-2">
                  <div className="rounded-lg bg-primary p-2 text-primary-foreground dark:bg-primary dark:text-primary-foreground">
                    <MessageCircleIcon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold dark:text-foreground text-white">Real-time Messaging</h3>
                </div>
                <p className="text-muted-foreground dark:text-muted-foreground">
                  Communicate instantly with your team through our lightning-fast chat interface.
                </p>
              </div>
              <div className="grid gap-1">
                <div className="flex items-center gap-2">
                  <div className="rounded-lg bg-secondary p-2 text-secondary-foreground dark:bg-secondary dark:text-secondary-foreground">
                    <FileIcon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold dark:text-foreground text-white">File Sharing</h3>
                </div>
                <p className="text-muted-foreground dark:text-muted-foreground">
                  Easily share documents, images, and other files with your team members.
                </p>
              </div>
              <div className="grid gap-1">
                <div className="flex items-center gap-2">
                  <div className="rounded-lg bg-accent p-2 text-accent-foreground dark:bg-accent dark:text-accent-foreground">
                    <SignalIcon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold dark:text-foreground text-white">Notifications</h3>
                </div>
                <p className="text-muted-foreground dark:text-muted-foreground">
                  Stay up-to-date with real-time notifications for new messages and updates.
                </p>
              </div>
              <div className="grid gap-1">
                <div className="flex items-center gap-2">
                  <div className="rounded-lg bg-muted p-2 text-muted-foreground dark:bg-muted dark:text-muted-foreground">
                    <SearchIcon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold dark:text-foreground text-white">Search</h3>
                </div>
                <p className="text-muted-foreground dark:text-muted-foreground">
                  Quickly find past conversations, files, and information with our powerful search functionality.
                </p>
              </div>
              <div className="grid gap-1">
                <div className="flex items-center gap-2">
                  <div className="rounded-lg bg-primary p-2 text-primary-foreground dark:bg-primary dark:text-primary-foreground">
                    <VideoIcon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold dark:text-foreground text-white">Video Calls</h3>
                </div>
                <p className="text-muted-foreground dark:text-muted-foreground">
                  Seamlessly transition from chat to video calls for more engaging team collaboration.
                </p>
              </div>
              <div className="grid gap-1">
                <div className="flex items-center gap-2">
                  <div className="rounded-lg bg-secondary p-2 text-secondary-foreground dark:bg-secondary dark:text-secondary-foreground">
                    <CalendarIcon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold dark:text-foreground text-white">Calendar Integration</h3>
                </div>
                <p className="text-muted-foreground dark:text-muted-foreground">
                  Stay on top of team schedules and events with our seamless calendar integration.
                </p>
              </div>
            </div>
          </div>
        </section>
        </>
    )
}
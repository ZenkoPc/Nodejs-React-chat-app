import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../ui/card";

export function Chat(){
    return(
        <>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-[#ffd700] to-[#1e90ff] dark:from-[#1f2937] dark:to-[#111827]">
          <div className="container px-4 md:px-6">
            <Card className="h-[500px] w-full max-w-4xl mx-auto rounded-2xl dark:bg-card dark:text-card-foreground">
              <CardHeader>
                <CardTitle className="dark:text-foreground">Team Chat</CardTitle>
                <CardDescription className="dark:text-muted-foreground">
                  Ongoing conversation between the marketing team.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 overflow-y-auto">
                <div className="flex flex-col gap-4">
                  <div className="flex items-start gap-4">
                    <div className="rounded-lg w-11 h-11 bg-[#55efc4] text-3xl flex items-center justify-center dark:bg-muted dark:text-muted-foreground">
                      😁
                    </div>
                    <div className="grid gap-1 items-start text-sm">
                      <div className="flex items-center gap-2">
                        <div className="font-bold dark:text-foreground">max</div>
                        <div className="text-sm text-muted-foreground dark:text-muted-foreground">2:39pm</div>
                      </div>
                      <div>
                        <p className="dark:text-foreground">Hey team, great work on the new campaign!</p>
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <button className="bg-blue-100 border-blue-400 border-2 flex items-center gap-1 px-2 h-7 rounded-full dark:bg-muted dark:border-muted dark:text-muted-foreground">
                          🔥 12
                        </button>
                        <button className="bg-muted border-2 border-muted flex items-center gap-1 px-2 h-7 rounded-full hover:bg-background hover:border-gray-300 dark:bg-muted dark:border-muted dark:hover:bg-card dark:hover:border-muted dark:text-muted-foreground">
                          😍 2
                        </button>
                        <button className="bg-muted border-2 border-muted flex items-center gap-1 px-2 h-7 rounded-full hover:bg-background hover:border-gray-300 dark:bg-muted dark:border-muted dark:hover:bg-card dark:hover:border-muted dark:text-muted-foreground">
                          👍 1
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-lg w-11 h-11 bg-[#ffeaa7] text-3xl flex items-center justify-center dark:bg-muted dark:text-muted-foreground">
                      😎
                    </div>
                    <div className="grid gap-1 items-start text-sm">
                      <div className="flex items-center gap-2">
                        <div className="font-bold dark:text-foreground">alex</div>
                        <div className="text-sm text-muted-foreground dark:text-muted-foreground">2:40pm</div>
                      </div>
                      <div>
                        <p className="dark:text-foreground">Awesome! 😍</p>
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <button className="bg-muted border-2 border-muted flex items-center gap-1 px-2 h-7 rounded-full hover:bg-background hover:border-gray-300 dark:bg-muted dark:border-muted dark:hover:bg-card dark:hover:border-muted dark:text-muted-foreground">
                          😍 2
                        </button>
                        <button className="bg-muted border-2 border-muted flex items-center gap-1 px-2 h-7 rounded-full hover:bg-background hover:border-gray-300 dark:bg-muted dark:border-muted dark:hover:bg-card dark:hover:border-muted dark:text-muted-foreground">
                          👍 1
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-lg w-11 h-11 bg-[#fdcb6e] text-3xl flex items-center justify-center dark:bg-muted dark:text-muted-foreground">
                      🤠
                    </div>
                    <div className="grid gap-1 items-start text-sm">
                      <div className="flex items-center gap-2">
                        <div className="font-bold dark:text-foreground">sarah</div>
                        <div className="text-sm text-muted-foreground dark:text-muted-foreground">2:41pm</div>
                      </div>
                      <div>
                        <p className="dark:text-foreground">Amazing work team! 👍</p>
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <button className="bg-muted border-2 border-muted flex items-center gap-1 px-2 h-7 rounded-full hover:bg-background hover:border-gray-300 dark:bg-muted dark:border-muted dark:hover:bg-card dark:hover:border-muted dark:text-muted-foreground">
                          😍 2
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
        </>
    )
}
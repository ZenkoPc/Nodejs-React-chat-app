interface props{
    avatar: string
    username: string
    hour: string
    message: string
    reactions: string[]
    active: boolean
}

export function Message(props: props) {
  return (
    <>
      <div className="flex items-start gap-4">
        <div className="rounded-lg w-11 h-11 bg-[#55efc4] text-3xl flex items-center justify-center dark:bg-muted dark:text-muted-foreground">
          {props.avatar}
        </div>
        <div className="grid gap-1 items-start text-sm">
          <div className="flex items-center gap-2">
            <div className="font-bold dark:text-foreground">
                {props.username}
            </div>
            <div className="text-sm text-muted-foreground dark:text-muted-foreground">
              {props.hour}
            </div>
          </div>
          <div>
            <p className="dark:text-foreground">
                {props.message}
            </p>
          </div>
          <div className="flex items-center gap-2 mt-1">
            {
                props.reactions.map((reaction) => {
                    if(props.active){
                        return(
                            <button className="bg-blue-100 border-blue-400 border-2 flex items-center gap-1 px-2 h-7 rounded-full dark:bg-muted dark:border-muted dark:text-muted-foreground">
                                {reaction}
                            </button>
                        )
                    }else{
                        return(
                            <button className="bg-slate-200 border-gray-400 border-2 flex items-center gap-1 px-2 h-7 rounded-full dark:bg-muted dark:border-muted dark:text-muted-foreground">
                                {reaction}
                            </button>
                        )
                    }
                })
            }
          </div>
        </div>
      </div>
    </>
  );
}

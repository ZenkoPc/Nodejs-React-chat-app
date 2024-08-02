import { Footer } from "@/utils/shared/footer";
import { NavBar } from "@/utils/shared/navbar";
import { Outlet } from "react-router-dom";

export function GetElement(){
    return(
        <>
            <NavBar />
            <section className="flex gap-3 h-full">
                <main className="w-full h-full flex flex-grow">
                    <div className="w-full dark:border-0 dark:bg-transparent rounded-none [&>div]:justify-start">
                        <Outlet />
                    </div>
                </main>
            </section>
            <Footer />
        </>
    )
}
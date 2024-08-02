import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useTranslation } from "react-i18next";
import { motion } from 'framer-motion'

export function LoginForm(){

    const { t } = useTranslation() 

    function handleLoginSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault()
    }

    return(
        <>
            <motion.div
                transition={{ duration: 0.5 }}
                initial={{ y: "-100%" }}
                exit={{ y: "100%" }}
                viewport={{ once: true }}
                whileInView={{ y: 0 }}
            >
                <Card id="lucid">
                    <form onSubmit={(e) => handleLoginSubmit(e)}>
                    <CardHeader>
                        <CardTitle className="text-slate-200">
                        {t('LogIn')}
                        </CardTitle>
                        <CardDescription className="text-base mt-4">
                            {t('subTitleLogin')}
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2 text-slate-300">
                        <Label htmlFor="emailLogin" className="capitalize">
                            {t('email')}
                        </Label>
                        <Input id="emailLogin" type="email" placeholder={t('YourEmail')} className="text-white bg-slate-950" />
                        </div>
                        <div className="space-y-2 text-slate-300">
                        <Label htmlFor="passwordLogin" className="capitalize">
                            {t('password')}
                        </Label>
                        <Input id="passwordLogin" type="password" placeholder={t('YourPass')} className="text-white bg-slate-950" />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button className="w-full">
                            {t('LogIn')}
                        </Button>
                    </CardFooter>
                    </form>
                </Card>
            </motion.div>
        </>
    )
}
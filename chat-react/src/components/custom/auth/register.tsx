import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export function RegisterForm(){

    const { t } = useTranslation()

    function handleRegisterSubmit(e: React.FormEvent<HTMLFormElement>){
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
                <Card id="lucid" className="">
                    <form onSubmit={(e) => handleRegisterSubmit(e)}>
                    <CardHeader>
                    <CardTitle className="text-slate-200 capitalize">
                        {t('SignUpNewAcc')}
                    </CardTitle>
                    <CardDescription className="text-base capitalize mt-4">
                        {t('subTitleRegister')}
                    </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                    <div className="space-y-2 text-slate-300">
                        <Label htmlFor="usernameRegister" className="capitalize">
                            {t('username')}
                        </Label>
                        <Input id="usernameRegister" placeholder={t('enterUsername')} className="text-white bg-slate-950" />
                    </div>
                    <div className="space-y-2 text-slate-300">
                        <Label htmlFor="emailRegister" className="capitalize">
                            {t('email')}
                        </Label>
                        <Input id="emailRegister" type="email" placeholder={t('YourEmail')} className="text-white bg-slate-950" />
                    </div>
                    <div className="space-y-2 text-slate-300">
                        <Label htmlFor="passwordRegister" className="capitalize">
                            {t('password')}
                        </Label>
                        <Input id="passwordRegister" type="password" placeholder={t('YourPass')} className="text-white bg-slate-950" />
                    </div>
                    <div className="space-y-2 text-slate-300">
                        <Label htmlFor="repeatPasswordRegister" className="capitalize">
                            {t('RepeatPass')}
                        </Label>
                        <Input id="repeatPasswordRegister" type="password" placeholder={t('repeatYourPass')} className="text-white bg-slate-950" />
                    </div>
                    <div className="flex items-center space-x-2">
                        <Checkbox id="terms" />
                        <Label htmlFor="terms" className="text-sm text-slate-300 font-medium leading-none">
                        {t('AcceptTerms')}
                        </Label>
                    </div>
                    </CardContent>
                    <CardFooter>
                    <Button type="submit" className="w-full">
                        {t('SignUpNewAcc')}
                    </Button>
                    </CardFooter>
                    </form>
                </Card>
            </motion.div>
        </>
    )
}
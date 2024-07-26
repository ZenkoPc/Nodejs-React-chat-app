import { WebcamIcon } from "@/utils/getIcons";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next'
import { setLanguage as updateLang } from "@/utils/languages";
import i18n from '../../i18n'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";

interface props {
    es: string
    en: string
    fr: string
    ge: string
  }
  

export function NavBar(){

    const [language, setLanguage] = useState<string>(i18n.language)
    const { t } = useTranslation()

    const languages: props = {
        'es': 'Spanish',
        'en': 'English',
        'fr': 'French',
        'ge': 'German'
    }

    const updateLanguage = (language: string) => {
        setLanguage(language)
        updateLang(language)
        console.log(language)
    }

    return(
        <>
        <header className="px-4 lg:px-6 min-h-14 flex items-center bg-[#111827] text-white">
          <Link to={'/'} className="flex items-center justify-center">
            <WebcamIcon className="h-6 w-6" />
            <span>
                Chat App
            </span>
            <span className="sr-only">Chat App</span>
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link to={'/'} className="text-sm my-auto font-medium hover:underline underline-offset-4 text-white">
              {t('Home')}
            </Link>
            <Link to={'v1/newChat'} className="text-sm my-auto font-medium hover:underline underline-offset-4 text-white">
              {t('CreateChat')}
            </Link>
            <Link to={'v1/joinChat'} className="text-sm my-auto font-medium hover:underline underline-offset-4 text-white">
              {t('JoinChat')}
            </Link>
            <Link to={'v1/auth'} className="text-sm my-auto font-medium hover:underline underline-offset-4 text-white">
              {t('SignIn')}
            </Link>
            <DropdownMenu>
                <DropdownMenuTrigger>
                    {t(languages[language])}
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem onClick={() => updateLanguage('es')}>
                        {languages.es}
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => updateLanguage('en')}>
                        {languages.en}
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => updateLanguage('fr')}>
                        {languages.fr}
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => updateLanguage('ge')}>
                        {languages.ge}
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
          </nav>
        </header>
        </>
    )
}
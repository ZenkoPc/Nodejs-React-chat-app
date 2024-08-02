import { FranceIcon, GermanyIcon, SpainIcon, USAIcon, WebcamIcon } from "@/utils/getIcons";
import { ReactNode, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next'
import { setLanguage as updateLang } from "@/utils/languages";
import i18n from '../../i18n'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../../components/ui/dropdown-menu";

interface countryIcon{
  code: string
  name: string
  icon: ReactNode
}

interface props {
    es: countryIcon
    en: countryIcon
    fr: countryIcon
    ge: countryIcon
  }
  

export function NavBar(){

    const [language, setLanguage] = useState<string>(i18n.language)
    const { t } = useTranslation()

    const languages: props = {
        'es': {
          code: 'es',
          name: 'Spanish',
          icon: <SpainIcon />
        },
        'en': {
          code: 'en',
          name: 'English',
          icon: <USAIcon />
        },
        'fr': {
          code: 'fr',
          name: 'French',
          icon: <FranceIcon /> 
        },
        'ge': {
          code: 'ge',
          name: 'German',
          icon: <GermanyIcon />
        }
    }

    const updateLanguage = (language: string) => {
        setLanguage(language)
        updateLang(language)
        console.log(language)
    }

    return(
        <>
        <header className="px-4 capitalize lg:px-6 min-h-14 flex items-center bg-[#111827] text-white">
          <Link to={'/'} className="flex items-center justify-center">
            <WebcamIcon />
            <span>
              &nbsp; Chat App
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
                <DropdownMenuTrigger className="flex items-center gap-3">
                    <span className="">
                      {languages[language as keyof props].icon}
                    </span>
                    <span className="font-medium">
                      {t(languages[language as keyof props].name)}
                    </span>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="dark">
                    <DropdownMenuItem onClick={() => updateLanguage('es')}>
                        {t(languages.es.name)}
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => updateLanguage('en')}>
                        {t(languages.en.name)}
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => updateLanguage('fr')}>
                        {t(languages.fr.name)}
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => updateLanguage('ge')}>
                        {t(languages.ge.name)}
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
          </nav>
        </header>
        </>
    )
}
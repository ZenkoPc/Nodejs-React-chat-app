import i18n from 'i18next'

export function getLanguage () {
    const themeStorage = window.localStorage.getItem('languageChat')

    if(themeStorage !== null){
        return themeStorage
    }

    return('es')
}

export function setLanguage (language :string) {
    window.localStorage.setItem('languageChat', language)
    i18n.changeLanguage(language)
}
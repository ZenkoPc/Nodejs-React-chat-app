import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import Backend from 'i18next-http-backend'

const getCurrentHost = import.meta.env.MODE === 'development' ? 'https://localhost:5173' : 'Link to prod'

i18n
    .use(Backend)
    .use(initReactI18next)
    .init({
        lng: 'es',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        },
        backend: {
            loadPath: `${getCurrentHost}/i18n/{{lng}}.json`
        }
    })

export default i18n
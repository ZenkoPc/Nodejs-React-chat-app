import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import i18n from 'i18next'
import './i18n.ts'
import { getLanguage } from './utils/languages.tsx'

const language = getLanguage()
i18n.changeLanguage(language)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

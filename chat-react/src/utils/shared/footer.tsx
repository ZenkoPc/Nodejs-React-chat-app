import { useTranslation } from "react-i18next"

export function Footer(){

    const { t } = useTranslation()

    return(
        <>
            <footer className="bg-gray-900">
                <div className="mx-auto w-full">
                <div className="grid grid-cols-2 gap-8 px-20 py-6 lg:py-8 md:grid-cols-4">
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Chat app</h2>
                        <ul className="text-gray-500 dark:text-gray-400 font-medium">
                            <li className="mb-4">
                                <a href="#" className=" hover:underline capitalize">
                                    {t('about')}
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">
                            {t('contactUs')}
                        </h2>
                        <ul className="text-gray-500 dark:text-gray-400 font-medium">
                            <li className="mb-4">
                                <a href="https://github.com/ZenkoPc" target="_blank" className="hover:underline">
                                    Github
                                </a>
                            </li>
                            <li className="mb-4">
                                <a href="mailto:pipeobandog@hotmail.com" className="hover:underline capitalize">
                                    {t('email')}
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Legal</h2>
                        <ul className="text-gray-500 dark:text-gray-400 font-medium">
                        <li className="mb-4">
                                <a href="#" className="hover:underline capitalize">
                                    {t('privacyPolicy')}
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">
                            {t('availableOn')}
                        </h2>
                        <ul className="text-gray-500 dark:text-gray-400 font-medium">
                            <li className="mb-4">
                                <span className="">iOS</span>
                            </li>
                            <li className="mb-4">
                                <span className="">Android</span>
                            </li>
                            <li className="mb-4">
                                <span className="">Windows</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="px-4 py-6 bg-gray-700 md:flex md:items-center md:justify-between">
                    <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">© 2024 Chat Online v1. All Rights Reserved.
                    </span>
                    <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
                        <a href="https://github.com/ZenkoPc" target="_blank" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path clipRule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"/>
                            </svg>
                            <span className="sr-only">GitHub account</span>
                        </a>
                    </div>
                </div>
                </div>
            </footer>
        </>
    )
}
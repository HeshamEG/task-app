import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import XHR from "i18next-xhr-backend";
const getLang = () => {
  if (localStorage.getItem('lng')) return localStorage.getItem('lng')
  return 'ar'
}
let lng: any = getLang();
i18n
  .use(XHR)
  .use(initReactI18next)
  .init({
    lng,
    debug: false,
    keySeparator: ".",
    returnObjects: true,
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: "/translations/{{lng}}/{{ns}}.json",
      allowMultiLoading: true,
    },
    react: {
      wait: true,
      useSuspense: true,
    },
  });
localStorage.setItem('lng', lng)
export default i18n;

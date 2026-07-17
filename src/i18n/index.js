import en from "./en.json";
import sq from "./sq.json";
import mk from "./mk.json";
import sr from "./sr.json";

const dictionaries = { en, sq, mk, sr };

export const languages = {
  en: "English",
  sq: "Shqip",
  mk: "Македонски",
  sr: "Srpski",
};

export const defaultLang = "en";

export function getLangFromUrl(url) {
  const [, lang] = url.pathname.split("/");
  if (lang in dictionaries) return lang;
  return defaultLang;
}

export function useTranslations(lang) {
  const dict = dictionaries[lang] ?? dictionaries[defaultLang];
  return function t(key) {
    return dict[key] ?? key;
  };
}

export function getHomeUrl(lang) {
  return lang === defaultLang ? "/" : `/${lang}/`;
}

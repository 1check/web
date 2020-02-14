import EN, { EN_LABEL } from './en';
import FR, { FR_LABEL } from './fr';

const LANG = {
    [EN_LABEL]: EN,
    [FR_LABEL]: FR
};

const ALL = Object.keys(LANG);

const setLang = (lang) => {
    localStorage.setItem('lang', lang);
};

const getLang = () => {
    const lang = localStorage.getItem('lang');
    const isValid = lang && ALL.includes(lang);
    return isValid ? LANG[lang] : EN;
};

const getCurrentLangLabel = () => {
    const lang = localStorage.getItem('lang');
    const isValid = lang && ALL.includes(lang);
    return isValid ? lang : EN_LABEL;
};

export { ALL, getCurrentLangLabel, setLang };
export default getLang();

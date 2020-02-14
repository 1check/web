import EN_T, { EN } from './en';
import FR_T, { FR } from './fr';

const LANG = {
    EN: EN_T,
    FR: FR_T
};

const setLang = (lang) => {
    localStorage.setItem('lang', lang);
}

const getLang = () => {
    const lang = localStorage.getItem('lang');
    return lang ? LANG[lang] : EN;
}

const getCurrentLang = () => {
    const lang = localStorage.getItem('lang');
    return lang ? lang : EN;
}

export { EN, FR, getCurrentLang, setLang };
export default getLang();

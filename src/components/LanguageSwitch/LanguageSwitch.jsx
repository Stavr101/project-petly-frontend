import { LanguageSwitchEl, LanguageOption } from "./LanguageSwitch.styled";
import { useTranslation } from 'react-i18next';
import { useState, useLayoutEffect } from "react";

const LanguageSwitch = () => {
    const { i18n } = useTranslation();
    const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  }

  const [checked, setChecked] = useState(true);
  const [lang, setLang] = useState(window.localStorage.getItem('i18nextLng'));

  useLayoutEffect(() => {
    const selectedLang = window.localStorage.getItem('i18nextLng');

    if (selectedLang) {
      setLang(selectedLang);
    } 
  }, [lang])
  
  const changeOption = (ln) => {
      setLang(ln);
      setChecked(!checked);
    }
    
    return (
        <LanguageSwitchEl> 
            <LanguageOption checked={lang === 'en' ? 'checked' : ''}
              label="EN"
              type="radio"
              name="language"
              value="en"
              onChange={() => {
              changeLanguage("en");
                changeOption();
              }}>
              </LanguageOption>
            <LanguageOption checked={lang === 'uk' ? 'checked' : ''}
              label="UA"
              type="radio"
              name="language"
              value="uk"
              onChange={() => {
              changeLanguage("uk");
              changeOption();
              }}>
              </LanguageOption>
          </LanguageSwitchEl>
    )
}

export default LanguageSwitch;
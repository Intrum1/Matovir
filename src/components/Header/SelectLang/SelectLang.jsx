import { useState, useEffect, useRef} from 'react'
import i18next from 'i18next'
import { SelectWrap, DefaultLangDiv, DefaultLangBtn, LangBtn, DropDownDiv } from './SelectLang.styled'
import sprite from 'assets/icons/sprite.svg'
import czLang from 'assets/images/header/czech-republic.png'
import ukLang from 'assets/images/header/ukraine.png'
import LOCALS from 'i18n/constants'

const {CZ, UK} = LOCALS;

const SelectLang = ({variant}) => {
    const [isSelectVisible, setIsSelectVisible] = useState(false);
    const [chosenLanguage, setChosenLanguage] = useState(() => localStorage.getItem('i18nextLng') === UK ? ukLang : czLang);

    const selectBtnRef = useRef();


    useEffect(() => {
    const handleClickOutside = (e) => {
        if (isSelectVisible && selectBtnRef.current && !selectBtnRef.current.contains(e.target)) {
            hideDropDown();
        } 
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
    }, [isSelectVisible])

    const toggleDropDown = () =>  {
        setIsSelectVisible((prev) => !prev);
    };

    const hideDropDown = () =>  {
        setIsSelectVisible(false);
    };

    const choseLanguage = () => {
        setChosenLanguage((prev) => prev === czLang ? ukLang : czLang);
        i18next.changeLanguage(i18next.language === UK ? CZ : UK)
    };

  return (
    <SelectWrap $variant={variant}>
        <DefaultLangDiv>
            <DefaultLangBtn type='button' onClick={() => i18next.changeLanguage(CZ)} disabled>
                <img src={chosenLanguage} alt={i18next.language === CZ ? 'čeština' : 'ukrajinský jazyk'} width={30} height={30} />
            </DefaultLangBtn>
            <button  type='button' onClick={toggleDropDown} ref={selectBtnRef}>
              <svg width={20} height={20}>
                <use href={`${sprite}#${isSelectVisible ? 'icon-arrow-up' : 'icon-arrow-down'}`}></use>
              </svg>
            </button>
        </DefaultLangDiv>
        <DropDownDiv style={{display: `${isSelectVisible ? 'block' : 'none'}`}} >
            <LangBtn type='button' onClick={choseLanguage}>
                <img src={chosenLanguage === czLang ? ukLang : czLang} alt={i18next.language === CZ ? 'čeština' : 'ukrajinský jazyk'} width={30} height={30}/>
            </LangBtn>
        </DropDownDiv>
    </SelectWrap>
  )
}

export default SelectLang
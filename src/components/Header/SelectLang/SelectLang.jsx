import { useState, useEffect, useRef} from 'react'
import { SelectWrap, DefaultLangDiv, DefaultLangBtn, LangBtn, DropDownDiv } from './SelectLang.styled'
import sprite from 'assets/icons/sprite.svg'
import czLang from 'assets/images/header/czech-republic.png'
import ukLang from 'assets/images/header/ukraine.png'


const SelectLang = () => {
    const languages = [czLang, ukLang];
    const [isSelectVisible, setIsSelectVisible] = useState(false);
    const [chosenLanguage, setChosenLanguage] = useState(languages[0]);

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
        setChosenLanguage((prev) => prev === languages[0] ? languages[1] : languages[0]);
        localStorage.setItem('lang', chosenLanguage === languages[0] ? 'cz' : 'uk')
    };

  return (
    <SelectWrap>
        <DefaultLangDiv>
            <DefaultLangBtn id='cz' type='button'>
                <img src={chosenLanguage} alt='ikona českého jazyka' width={20} height={20}/>
            </DefaultLangBtn>
            <button id='select-btn' type='button' onClick={toggleDropDown} ref={selectBtnRef}>
              <svg width={15} height={15}>
                <use href={`${sprite}#${isSelectVisible ? 'icon-arrow-up' : 'icon-arrow-down'}`}></use>
              </svg>
            </button>
        </DefaultLangDiv>
        <DropDownDiv style={{display: `${isSelectVisible ? 'block' : 'none'}`}} >
            <LangBtn id='uk' type='button' onClick={choseLanguage}>
                <img src={chosenLanguage === languages[0] ? languages[1] : languages[0]} alt='ikona ukrajinského jazyka' width={20} height={20}/>
            </LangBtn>
        </DropDownDiv>
    </SelectWrap>
  )
}

export default SelectLang
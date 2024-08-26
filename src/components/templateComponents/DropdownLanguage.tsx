import {useState} from 'react'
import {useTranslation} from 'react-i18next';
import {Dropdown} from 'react-bootstrap';

export const DropdownLanguaje = () => {
    const [_CurentLenguaje ,setCurentLenguaje] = useState(1);
    const [t,i18n]=useTranslation("global");


    return (
        <Dropdown id="ddlLenguaje"  drop="down" className='border-skin-primary active:border-none focus:border-none border-none bg-skin-primary/30 rounded-md font-semibold hover:bg-skin-secondary/80 hover:text-skin-mainBG'>
        <Dropdown.Toggle variant="" className='font-semibold' >
        {t("CurrentLenguaje")}
        </Dropdown.Toggle>
        <Dropdown.Menu >
            <Dropdown.Item as="button" className='hover:bg-skin-primary/30' onClick={async ()=>{i18n.changeLanguage("es");setCurentLenguaje(1);
        }} data-idculture="1" data-code="es-mx" >{t("Esp")}</Dropdown.Item>
            <Dropdown.Item as="button" className='hover:bg-skin-primary/30 ' onClick={async()=>{i18n.changeLanguage("en");setCurentLenguaje(2);
            }} data-idculture="2" data-code="en-us">{t("Eng")}</Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>

    );
}
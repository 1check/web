import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Nav from 'react-bootstrap/Nav';

import { ALL, getCurrentLang, setLang } from '../../assets/lang';

const LangDropDown = () => {
    const onItemSelected = (e1, event) => {
        setLang(event.target.name);
        window.location.reload(); 
    };

    const listItems = Object.keys(ALL).map(lang =>
        <Dropdown.Item onSelect={onItemSelected} name={lang}>
            {lang}
        </Dropdown.Item>
    );

    return (
        <Dropdown>
            <Dropdown.Toggle as={Nav.Link}>🌍</Dropdown.Toggle>
            <Dropdown.Menu>
                {listItems}
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default LangDropDown;

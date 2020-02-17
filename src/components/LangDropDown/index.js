import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Nav from 'react-bootstrap/Nav';

import '../Navigation/index.css';
import { ALL, getCurrentLangLabel, setLang } from '../../assets/lang';

const CustomToggle = props => React.forwardRef(({ children, onClick }, ref) => (
    <Nav.Link {...props} href="" ref={ref} onClick={e => {
            e.preventDefault();
            onClick(e);
        }}
    >
        {children}
    </Nav.Link>
));

const LangDropDown = (props) => {
    const onItemSelected = (e1, event) => {
        setLang(event.target.name);
        window.location.reload();
    };

    const listItems = ALL.map(lang =>
        <Dropdown.Item onSelect={onItemSelected} name={lang} key={lang}>
            {lang}
        </Dropdown.Item>
    );

    return (
        <Dropdown>
            <Dropdown.Toggle as={CustomToggle(props)}>
                {getCurrentLangLabel()}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {listItems}
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default LangDropDown;

import React from 'react';
import Styles from './Navitems.module.css';

import Navitem from './Navitem/Navitem';

const navitems = (props) => {
  var classNames = [Styles.Navitems, props.NavitemsStyle].join(" ");
  return (
    <ul className={classNames}>
      <li>
        <Navitem
          NavItemStyle={props.NavItemStyle}
          link="#hero">
          Home
          </Navitem>
      </li>
      <li>
        <Navitem
          NavItemStyle={props.NavItemStyle}
          link="#about">About Me</Navitem>
      </li>
      <li>
        <Navitem
          NavItemStyle={props.NavItemStyle}
          link="#projects">Projects</Navitem>
      </li>
      <li>
        <Navitem
          NavItemStyle={props.NavItemStyle}
          link="#contact">Contact</Navitem>
      </li>
    </ul>
  )
}

export default navitems;
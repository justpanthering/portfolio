import React from 'react';
import Styles from './Navitem.module.css';

const navitem = (props) => {
  var classNames = [Styles.Navitem, props.NavItemStyle].join(" ");
  return (
    <div className={classNames}>
      <a className={Styles.Link} href={props.link}>
        {props.children}
      </a>
    </div>
  )
}

export default navitem;
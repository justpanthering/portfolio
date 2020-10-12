import React from 'react';
import Styles from './Backdrop.module.css';

const backdrop = (props) => {
  return (
    <div
      className={Styles.Backdrop}
      onClick={props.toggleSideDrawer}>

    </div>
  )
}

export default backdrop;
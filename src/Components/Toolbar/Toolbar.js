import React from 'react';
import Styles from './Toolbar.module.css';

import Navitems from '../Navitems/Navitems';

const toolbar = (props) => {
  return (
    <div className={Styles.Toolbar}>
      {/* NavToggle */}
      <button
        className={Styles.NavIcon}
        onClick={props.toggleSideDrawer}>
        <i className="fa fa-bars" aria-hidden="true"></i>
      </button>
      {/* Logo */}
      <span className={Styles.Logo}>Ankit Lakra</span>
      {/* NavItems */}
      <div className={Styles.Navitems}>
        <Navitems NavitemsStyle={props.NavItemsStyle} />
      </div>
    </div>
  );
}

export default toolbar;
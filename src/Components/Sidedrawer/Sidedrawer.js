import React from 'react';
import Styles from './Sidedrawer.module.css';

import Navitems from '../Navitems/Navitems';
import SocialMediaIcons from '../SocialMediaIcons/SocialMediaIcons';

const sidedrawer = (props) => {
  var sidedrawerClassNames = ["shadow-lg p-3 mb-5 rounded", Styles.Sidedrawer].join(" ");
  return (
    <div
      className={sidedrawerClassNames}
      onClick={props.closeSidedrawer}>
      <Navitems
        NavitemsStyle={props.NavItemsStyle}
        NavItemStyle={props.NavItemStyle} />
      <SocialMediaIcons
        linkClassPayload={Styles.SocialLink}
        mediaClassPayload={Styles.SocialMedia} />
    </div>
  )
}

export default sidedrawer;
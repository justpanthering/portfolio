import React from 'react';

import Styles from './IconLinks.module.css';

const iconLinks = props => {
  var icon =
    <a
      className={Styles.Icon}
      href={props.playLink}
      target="_blank"
      title="View Website">
      <i className="fa fa-tablet" aria-hidden="true"></i>
    </a>

  if (props.type === "game") {
    icon =
      <a
        className={Styles.Icon}
        href={props.playLink}
        target="_blank"
        title="Play Game">
        <i className="fa fa-gamepad" aria-hidden="true"></i>
      </a>
  }
  return (
    <div className={Styles.IconLinks}>
      {icon}
      <a
        className={Styles.Icon}
        href={props.sourceCodeLink}
        target="_blank"
        title="View Source Code">
        <i className="fa fa-github" aria-hidden="true"></i>
      </a>
    </div>
  );
}

export default iconLinks;
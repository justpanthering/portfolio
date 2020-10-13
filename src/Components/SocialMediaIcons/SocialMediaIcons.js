import React from 'react';
import Styles from './SocialMediaIcons.module.css';

const socialMediaIcons = (props) => {
  var mediaClasses = [Styles.SocialMedia, props.mediaClassPayload].join(" ");
  var linkClasses = [Styles.SocialLink, props.linkClassPayload].join(" ");
  return (
    <ul className={mediaClasses}>
      <li className={Styles.SocialIcon}>
        <a
          className={linkClasses}
          href="https://www.instagram.com/an.kitkit/"
          target="_blank">
          <i
            className="fa fa-instagram"
            aria-hidden="true"></i>
        </a>
      </li>
      <li className={Styles.SocialIcon}>
        <a
          className={linkClasses}
          href="https://github.com/justpanthering"
          target="_blank">
          <i className="fa fa-github" aria-hidden="true"></i>
        </a>
      </li>
      <li className={Styles.SocialIcon}>
        <a
          className={linkClasses}
          href="https://www.linkedin.com/in/ankit-lakra-a5687a118/"
          target="_blank">
          <i className="fa fa-linkedin" aria-hidden="true"></i>
        </a>
      </li>
    </ul>
  )
}

export default socialMediaIcons;
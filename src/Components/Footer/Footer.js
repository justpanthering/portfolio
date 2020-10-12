import React from 'react';
import Styles from './Footer.module.css';

import SocialMediaIcons from '../SocialMediaIcons/SocialMediaIcons';

const footer = () => {
  // var classPayload = [Styles.]
  return (
    <footer className={Styles.Footer}>
      <SocialMediaIcons
        linkClassPayload={Styles.SocialLink}
        mediaClassPayload={Styles.SocialMedia} />
      <p className={Styles.FooterNote}>Developed by: Ankit Lakra</p>
    </footer>
  )
}

export default footer;
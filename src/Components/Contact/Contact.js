import React from 'react';
import GlobalStyles from '../../Assets/Global/GLOBAL_CSS.module.css';
import Styles from './Contact.module.css';

import SocialMediaIcons from '../SocialMediaIcons/SocialMediaIcons';

// BOOTSTRAP
import { Container } from 'react-bootstrap';

const contact = () => {
  return (
    <section id="contact">
      <Container>
        <div className={GlobalStyles.Title}>
          <h2>Contact Me</h2>
        </div>
        <div className={GlobalStyles.Content}>
          <ul className={Styles.ContactList}>
            <li>
              <h3>Email:</h3>
              <ul className={Styles.ContactList}>
                <li>
                  <i className="fa fa-envelope" aria-hidden="true"></i> ankitlakra137@gmail.com
                </li>
                <li><i className="fa fa-envelope" aria-hidden="true"></i> ankitlakra@outlook.com</li>
              </ul>
            </li>
            <br />
            <li>
              <h3>Find me on:</h3>
              <SocialMediaIcons
                mediaClassPayload={Styles.SocialMedia}
                linkClassPayload={Styles.SocialLink} />
            </li>
          </ul>
        </div>
      </Container>
    </section>
  )
}

export default contact;
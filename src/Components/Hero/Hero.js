import React from 'react';
import Styles from './Hero.module.css';

// BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

const hero = () => {
  return (
    <section className={Styles.Hero} id="hero">
      <Container>
        <div>
          <h1 className="display-1">
            Ankit Lakra
          </h1>
          <div className={Styles.Description}>
            <p className="lead">
              Frontend Web Developer
            </p>
            <pre> | </pre>
            <p className="lead">
              Unity Game Developer
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default hero;
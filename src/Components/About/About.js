import React from 'react';
import GlobalStyles from '../../Assets/Global/GLOBAL_CSS.module.css';

// BOOTSTRAP
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

const about = () => {
  return (
    <section id="about">
      <Container>
        <div className={GlobalStyles.Title}>
          <h1>
            About Me
        </h1>
        </div>
        <div className={GlobalStyles.Content}>
          <p>I am a front end web developer with skills in javascript framework and libraries such as React and Redux.</p>
          <p>I also develop 2D and 3D games in Unity Engine with C#.</p>
          <h3>
            Timeline
        </h3>
          <ul>
            <li>
              2010: Graduated 10th Standard from Don Bosco School, Guwahati
          </li>
            <li>
              2012: Graduated 12th Standard from Don Bosco School, Guwahati
          </li>
            <li>
              2017: Graduation in B.tech in ICT from Dhirubhai Ambani Institute of Information and Communication Technology (DAIICT), Gandhinagar
          </li>
          </ul>
        <h3>
          Work Experience
        </h3>
          <ul>
            <li>
              2020 - Present: Frontend Intern at <a href="https://www.datapeace.in/" target="_blank" rel="noopener noreferrer">DataPeace AI Technologies Pvt Ltd.</a>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  )
}

export default about;
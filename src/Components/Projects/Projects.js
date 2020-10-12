import React from 'react';
import Styles from './Projects.module.css';
import GlobalStyles from '../../Assets/Global/GLOBAL_CSS.module.css';

// COMPONENT
import ProjectSection from './ProjectSection/ProjectSection';
import WebDevProjects from './ProjectSection/WebDevProjects/WebDevProjects';
import GameDevProjects from './ProjectSection/GameDevProjects/GameDevProjects';

// BOOTSTRAP
import { Container } from 'react-bootstrap';

const projects = () => {
  return (
    <section id="projects" className={Styles.Projects}>
      <Container>
        <div className={GlobalStyles.Title}>
          <h1>
            Projects
          </h1>
        </div>
        <div className={GlobalStyles.Content}>
          <ProjectSection>
            <h3>Web Dev Projects</h3>
            <WebDevProjects />
          </ProjectSection>
          <ProjectSection>
            <h3>Game Dev Projects</h3>
            <GameDevProjects />
          </ProjectSection>
        </div>
      </Container>
    </section>
  )
}

export default projects;
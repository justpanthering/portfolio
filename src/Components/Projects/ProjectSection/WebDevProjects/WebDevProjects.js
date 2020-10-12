import React from 'react';

import Styles from '../ProjectSection.module.css';
import { Card, CardGroup } from 'react-bootstrap';

// COMPONENTS
import IconLinks from '../IconLinks/IconLinks';

const webDevProjects = () => {
  return (
    <CardGroup className={Styles.CardGroup}>
      <Card className={Styles.Card}>
        <div className={Styles.CardHeader}>
          <Card.Img variant="top" src="https://github.com/justpanthering/burger-builder/blob/master/src/assets/images/burger-logo.png?raw=true" />
          <Card.Body>
            <Card.Title>Burger Builder</Card.Title>
            <Card.Text>
              Burger ordering Single Page Application (SPA) website using React and Redux and interacts with external server (firebase).
            </Card.Text>
          </Card.Body>
        </div>
        <Card.Footer>
          <small className="text-muted">
            <IconLinks
              type="website"
              playLink="https://justpanthering.github.io/burger-builder/"
              sourceCodeLink="https://github.com/justpanthering/burger-builder" />
          </small>
        </Card.Footer>
      </Card>
      <Card className={Styles.Card}>
        <div className={Styles.CardHeader}>
          <Card.Img variant="top" src="https://github.com/justpanthering/forkify/blob/master/dist/img/logo.png?raw=true" />
          <Card.Body>
            <Card.Title>Forkify</Card.Title>
            <Card.Text>
              A recipe fetching (from external API) SPA website using HTML/CSS and Vanilla Javascript.
          </Card.Text>
          </Card.Body>
        </div>
        <Card.Footer>
          <small className="text-muted">
            <IconLinks
              type="website"
              playLink="https://justpanthering.github.io/forkify/"
              sourceCodeLink="https://github.com/justpanthering/forkify" />
          </small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://images.pexels.com/photos/53621/calculator-calculation-insurance-finance-53621.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
        <Card.Body>
          <Card.Title>Budgety</Card.Title>
          <Card.Text>
            A simple website that calculates monthly budget using the expenditure and income input by user, using HTML/CSS and Vanilla Javascript.
      </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">
            <IconLinks
              type="website"
              playLink="https://justpanthering.github.io/Budgety-Website/"
              sourceCodeLink="https://github.com/justpanthering/Budgety-Website" />
          </small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://images.pexels.com/photos/1111597/pexels-photo-1111597.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
        <Card.Body>
          <Card.Title>Pig Game</Card.Title>
          <Card.Text>
            A simple website that demostrates the <a href="https://en.wikipedia.org/wiki/Pig_(dice_game)">Pig Game</a>, using HTML/CSS and Vanilla Javascript.
      </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">
            <IconLinks
              type="website"
              playLink="https://justpanthering.github.io/The-Pig-Game-Website/"
              sourceCodeLink="https://github.com/justpanthering/The-Pig-Game-Website" />
          </small>
        </Card.Footer>
      </Card>
    </CardGroup>
  )
}

export default webDevProjects;
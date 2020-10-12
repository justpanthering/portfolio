import React from 'react';

import Styles from '../ProjectSection.module.css';
import { Card, CardGroup } from 'react-bootstrap';

// COMPONENTS
import IconLinks from '../IconLinks/IconLinks';

const webDevProjects = () => {
  return (
    <CardGroup className={Styles.CardGroup}>
      <Card className={Styles.Card}>
        <Card.Img variant="top" src="https://images.pexels.com/photos/3992933/pexels-photo-3992933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
        <Card.Body>
          <Card.Title>The Pandemic</Card.Title>
          <Card.Text>
            A 2D game based on social distancing during the current pandemic of COVID-19. Developed using Unity Game Engine and C#.
      </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">
            <IconLinks
              type="game"
              playLink="https://justpanthering.github.io/The-Pandemic-Unity2D/"
              sourceCodeLink="https://github.com/justpanthering/The-Pandemic-Unity2D" />
          </small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://github.com/justpanthering/flappy-bird-Unity2D/raw/master/Tut4%20-%20Flappy%20Bird%20Style/Gameplay.gif" />
        <Card.Body>
          <Card.Title>Flappy Birds (Recreated)</Card.Title>
          <Card.Text>
            Recreation of the Flappy Birds game from scratch using the Assets from Unity Asset Store and developed using Unity Game Engine and C#.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">
            <IconLinks
              type="game"
              playLink="https://justpanthering.github.io/flappy-bird-Unity2D/"
              sourceCodeLink="https://github.com/justpanthering/flappy-bird-Unity2D" />
          </small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://github.com/justpanthering/aa-Unity2D/raw/master/Tut3%20-%20aa/Gameplay.gif" />
        <Card.Body>
          <Card.Title>aa (Recreated)</Card.Title>
          <Card.Text>
            Recreation of the aa game from scratch  developed using Unity Game Engine and C#.
      </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">
            <IconLinks
              type="game"
              playLink='https://justpanthering.github.io/aa-Unity2D/'
              sourceCodeLink="https://github.com/justpanthering/aa-Unity2D" />
          </small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://github.com/justpanthering/Pong-Unity2D/raw/master/Tut2%20-%20Pong/Gameplay.gif" />
        <Card.Body>
          <Card.Title>Pong</Card.Title>
          <Card.Text>
            A 2D ping pong game developed using Unity Game Engine and C#.
      </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">
            <IconLinks
              type="game"
              playLink="https://justpanthering.github.io/Pong-Unity2D/"
              sourceCodeLink="https://github.com/justpanthering/Pong-Unity2D" />
          </small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://github.com/justpanthering/Cube-a-thon-Unity3D/raw/master/Cube-a-thon-3D/Gameplay.gif" />
        <Card.Body>
          <Card.Title>Cube-a-thon</Card.Title>
          <Card.Text>
            A 3D cube racing game developed using Unity Game Engine and C#.
      </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">
            <IconLinks
              type="game"
              playLink="https://justpanthering.github.io/Cube-a-thon-Unity3D/"
              sourceCodeLink="https://github.com/justpanthering/Cube-a-thon-Unity3D" />
          </small>
        </Card.Footer>
      </Card>
    </CardGroup>
  )
}

export default webDevProjects;
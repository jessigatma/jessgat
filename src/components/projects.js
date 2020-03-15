import React from 'react';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHtml5,
  faCss3Alt,
  faGitAlt,
  faGithub,
  faReact,
  faJs,
  faNode,
  faBootstrap,
  faPython,
  faAngular
} from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import './projects.css';

const Projects = () => {
  return (
    <div id="projects" className="background-projects">
      <div className="title-project">
        <h2> PROYECTOS </h2>
      </div>

      <div className="container">
        <Card style={{ width: '18rem' }} className="content">
          <Card.Img
            variant="top"
            src="https://i.ibb.co/dGHb4NP/equipolaboratoria.jpg"
          />
          <Card.Body>
            <Card.Title>Creando Equidad</Card.Title>
            <hr />
            <Card.Text>
              Página web para visualizar de forma sencilla los datos sobre
              equidad de género que maneja el Banco Mundial
            </Card.Text>
          </Card.Body>
          <div className="footer">
            <Card.Body>
              <Card.Link href="#">Code</Card.Link>
              <Card.Link href="#"> Demo</Card.Link>
            </Card.Body>
          </div>
        </Card>

        <Card style={{ width: '18rem' }} className="content">
          <Card.Img
            variant="top"
            src="https://i.ibb.co/NKDhTJR/burgerqueen.png"
          />
          <Card.Body>
            <Card.Title>Burger Queen</Card.Title>
            <hr />
            <Card.Text>
              Interfaz que agiliza la comunicación entre meseros y cocina. Envía
              de forma inmediata, a la cocina, las órdenes tomadas por los
              meseros
            </Card.Text>
          </Card.Body>
          <div className="footer">
            <Card.Body>
              <Card.Link href="#">Code</Card.Link>
              <Card.Link href="#"> Demo</Card.Link>
            </Card.Body>
          </div>
        </Card>

        <Card style={{ width: '18rem' }} className="content">
          <Card.Img
            variant="top"
            src="https://i.ibb.co/qCwBp99/37886197-10155806797364422-2196746974424727552-o.jpg"
          />
          <Card.Body>
            <Card.Title>Red Social Poua</Card.Title>
            <hr />
            <Card.Text>
              Es una red social que ayuda a sus usuarios a contar la historia de
              México a través de los lugares que conocen
            </Card.Text>
          </Card.Body>
          <div className="footer">
            <Card.Body>
              <Card.Link href="#">Code </Card.Link>
              <Card.Link href="#"> Demo</Card.Link>
            </Card.Body>
          </div>
        </Card>
      </div>

      <div className="skills content">
        <FontAwesomeIcon icon={faPython} size="2x" />
        <FontAwesomeIcon icon={faJs} size="2x" />
        <FontAwesomeIcon icon={faHtml5} size="2x" />
        <FontAwesomeIcon icon={faCss3Alt} size="2x" />
        <FontAwesomeIcon icon={faGitAlt} size="2x" />
        <FontAwesomeIcon icon={faGithub} size="2x" />
        <FontAwesomeIcon icon={faReact} size="2x" />
        <FontAwesomeIcon icon={faAngular} size="2x" />
        <FontAwesomeIcon icon={faBootstrap} size="2x" />
        <FontAwesomeIcon icon={faNode} size="2x" />
        <FontAwesomeIcon icon={faDatabase} size="2x" />
      </div>
    </div>
  );
};

export default Projects;

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHtml5,
  faCss3Alt,
  faGitAlt,
  faGithub,
  faReact,
  faJs,
  faNode,
  faBootstrap
} from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import './about.css';

const About = () => {
  return (
    <div id="about" className="about">
      <div className="aboutme">
        <div className="textabout">
          <h3>¡Hola, soy Jessica!</h3>

          <p>
            <br /> Chilanga de corazón, viviendo actualmente en Jalisco, amante
            de la ciencia, los datos y la programación. Me encantan los retos y
            aprender de manera permanente. Soy Física por la UNAM y actualmente
            estudio Desarrollo Front End en Laboratoria (Guadalajara). <br />
            <br />
            {/* Mi experiencia profesional me ha permitido desarrollar mis
            habilidades de liderazgo, planeación estratégica, solución de
            problemas y pensamiento crítico. Dirigí los campamentos escolares
            Kukaponga en la región de Jalisco, y he trabajado desde hace 15 años
            en educación vinculada a la Ciencia en instituciones de educación
            media y superior, así como, emprendiendo mis propios proyectos de
            enseñanza y divulgación. <br />
            <br /> */}
            Amo lo que hago y mi siguiente objetivo es incursionar
            profesionalmente en el área de desarrollo web. Busco un lugar donde
            pueda desarrollarme al máximo y aprovechar mis habilidades
            físico-matemáticas y de programación.
          </p>
        </div>

        <div className="myphoto">
          <img
            src="https://i.ibb.co/9cM0MMD/IMG-20160101-204224.jpg"
            className="img-thumbnail"
            alt="Hamilton"
          />
        </div>
      </div>

      <div className="skills">
        <h5> Conocimientos en </h5>
        <FontAwesomeIcon icon={faJs} size="2x" />
        <FontAwesomeIcon icon={faHtml5} size="2x" />
        <FontAwesomeIcon icon={faCss3Alt} size="2x" />
        <FontAwesomeIcon icon={faGitAlt} size="2x" />
        <FontAwesomeIcon icon={faGithub} size="2x" />
        <FontAwesomeIcon icon={faReact} size="2x" />
        <FontAwesomeIcon icon={faBootstrap} size="2x" />
        <FontAwesomeIcon icon={faNode} size="2x" />
        <FontAwesomeIcon icon={faDatabase} size="2x" />
      </div>
    </div>
  );
};

export default About;

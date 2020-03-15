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
  faBootstrap,
  faPython,
  faAngular
} from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import './skills.css';

const Skills = () => {
  return (
    <div id="skills" className="skills">
      <div className="skills">
        <h1 className="title-skills"> HABILIDADES </h1>

        <FontAwesomeIcon icon={faJs} size="2x" />
        <FontAwesomeIcon icon={faHtml5} size="2x" />
        <FontAwesomeIcon icon={faCss3Alt} size="2x" />
        <FontAwesomeIcon icon={faGitAlt} size="2x" />
        <FontAwesomeIcon icon={faGithub} size="2x" />
        <FontAwesomeIcon icon={faReact} size="2x" />
        <FontAwesomeIcon icon={faBootstrap} size="2x" />
        <FontAwesomeIcon icon={faNode} size="2x" />
        <FontAwesomeIcon icon={faDatabase} size="2x" />
        <FontAwesomeIcon icon={faPython} size="2x" />
        <FontAwesomeIcon icon={faAngular} size="2x" />
      </div>
    </div>
  );
};

export default Skills;

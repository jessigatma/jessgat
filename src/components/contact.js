import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFilePdf, faCopyright } from '@fortawesome/free-regular-svg-icons';
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';
import './contact.css';

const Contact = () => {
  return (
    <div id="contact" className="contactme">
      <h1>Contáctame</h1>
      <hr />

      <div className="contactflex">
        <a
          href="https://www.linkedin.com/in/jessgatma/"
          rel="noreferrer noopener"
          target="_blank"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a
          href="https://github.com/jessigatma"
          rel="noreferrer noopener"
          target="_blank"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a
          href="https://drive.google.com/file/d/1yVPErgOoudo60Ngbx2VpanETvlPan-ef/view?usp=sharing"
          rel="noreferrer noopener"
          target="_blank"
        >
          <FontAwesomeIcon icon={faFilePdf} size="2x" />
        </a>
        <a
          href="mailto:jessgatma@gmail.com"
          rel="noreferrer noopener"
          target="_blank"
        >
          <FontAwesomeIcon icon={faEnvelopeOpenText} size="2x" />
        </a>
      </div>
      <hr />
      <h6>
        {' '}
        <FontAwesomeIcon icon={faCopyright} /> 2019 Jessica Gatica inc.
      </h6>
    </div>
  );
};

export default Contact;

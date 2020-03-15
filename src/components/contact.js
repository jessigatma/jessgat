import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFilePdf, faCopyright } from '@fortawesome/free-regular-svg-icons';
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';
import Form from 'react-bootstrap/Form';
import './contact.css';
import { Button } from 'react-bootstrap';

class Contact extends Component {
  state = {
    name: '',
    message: '',
    email: '',
    sent: false,
    buttonText: 'ENVIAR'
  };

  formSubmit = e => {
    e.preventDefault();
    this.setState({
      buttonText: '...enviando'
    });

    const data = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message
    };

    fetch('https://portfolio-form.herokuapp.com/', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        this.setState({ sent: true }, this.resetForm());
      })
      .catch(err => console.log('Fetch error: ', err));
  };

  resetForm = () => {
    this.setState({
      name: '',
      email: '',
      message: '',
      buttonText: 'ENVIAR'
    });
  };
  render() {
    return (
      <div id="contact" className="contactme">
        <div className="title-contact">
          <h2>CONTACTO</h2>
        </div>
        <div className="form-format">
          <Form
            onSubmit={e => this.formSubmit(e)}
            encType="multipart/form-data"
          >
            <Form.Group>
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nombre"
                name="name"
                value={this.state.name}
                onChange={e => this.setState({ name: e.target.value })}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Correo Electrónico</Form.Label>
              <Form.Control
                type="email"
                placeholder="nombre@ejemplo.com"
                name="email"
                value={this.state.email}
                onChange={e => this.setState({ email: e.target.value })}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Mensaje</Form.Label>
              <Form.Control
                type="textarea"
                placeholder="tu comentario"
                name="message"
                value={this.state.message}
                onChange={e => this.setState({ message: e.target.value })}
                required
              />
            </Form.Group>
            <Button type="submit">{this.state.buttonText}</Button>
          </Form>
        </div>
        {/* <hr /> */}
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

        <h6>
          {' '}
          <FontAwesomeIcon icon={faCopyright} /> 2019 Jessica Gatica inc.
        </h6>
      </div>
    );
  }
}
export default Contact;

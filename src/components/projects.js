import React from 'react';
import './projects.css';

const Projects = () => {
  return (
    <div id="projects" className="background-projects">
      <div className="title-project">
        <h1> Proyectos </h1>
      </div>
      <div className="container">
        <div className="box">
          <div className="img-box">
            <img
              src="https://i.ibb.co/DGMWznc/african-3721196-1920.jpg"
              alt="women"
              title="Women"
            />
          </div>

          <div className="content">
            <h3>Creando Equidad</h3>

            <p>
              Página web para visualizar de forma sencilla los datos sobre
              equidad de género que maneja el Banco Mundial
            </p>

            <a href="https://github.com/jessigatma">¡Conócelo!</a>
          </div>
        </div>

        <div className="box">
          <div className="img-box">
            <img
              src="https://i.ibb.co/5TCJvbQ/hamburger-2044036-1920.jpg"
              alt="Burger"
              title="Burger"
            />
          </div>

          <div className="content">
            <h3>Burger Queen</h3>

            <p>
              Interfaz que agiliza la comunicación entre meseros y cocina. Envía
              de forma inmediata, a la cocina, las órdenes tomadas por los
              meseros.
              {/* y les notifica estatus del platillo. */}
            </p>

            <a href="https://github.com/jessigatma">¡Conócelo</a>
          </div>
        </div>

        <div className="box">
          <div className="img-box">
            <img
              src="https://i.ibb.co/2NhN4TV/museum-1136231-1920.jpg"
              alt="Museum"
              title="Museum"
            />
          </div>

          <div className="content">
            <h3>Red Social Poua</h3>

            <p>
              Es una red social que ayuda a sus usuarios a contar la historia de
              México a través de los lugares que conocen.
            </p>

            <a href="https://github.com/jessigatma">¡Conócelo!</a>
          </div>
        </div>

        {/* <div className="box">
          <div className="img-box">
            <img
              src="https://images.pexels.com/photos/1743165/pexels-photo-1743165.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt="Landscape"
              title="Landscape"
            />
          </div>

          <div className="content">
            <h2>Tittle</h2>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <a href="https://github.com/jessigatma">Read More</a>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Projects;

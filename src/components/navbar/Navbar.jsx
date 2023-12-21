import React from 'react'
import './navbar.css';
import logo from '../../assets/logos/logo.png';

const Navbar = () => {
  return (
    <>
      <div className="container">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <div className='d-flex align-items-center gap-3'>
            <img src={logo} alt="Logo" />
            <a className="navbar-brand fw-bolder navbar-nombre-creador" href="#">Jorge Federico Miranda Morones</a>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end py-4 py-lg-0" id="navbarNav">
            <ul className="navbar-nav d-flex gap-4 justify-content-center align-items-center">
              <li className="nav-item">
                <a className="nav-link active d-block" aria-current="page" href="#sobreMi">Sobre mi</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">Skills</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#hobbies">Hobbies</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#formacion">Formación</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#proyectos">Proyectos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contacto">Contacto</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </div>
    </>
  )
}

export default Navbar
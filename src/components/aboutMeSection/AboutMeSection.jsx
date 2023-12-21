import React from 'react';
import './aboutMeSection.css'

const AboutMeSection = () => {
    return (
        <>
            <div className="container-fluid aboutMeSection py-0 py-sm-5 mb-5">
                <div className="container py-5">
                    <div className="row py-5 d-flex justify-content-between gap-4">
                        <div className="col-12 col-md-7 d-flex flex-column gap-3">
                            <h2 className='h2 fw-bolder'>Sobre mi</h2>
                            <p className='lh-base'>
                                Tengo 24 años y soy de Zacatecas pero he vivido cuatro años en
                                Guadalajara. Acabo de terminar la carrera de Ingeniería en Sistemas
                                Computacionales y  lo largo de ella me fui inclinando
                                poco a poco al desarrollo web en el area de Frond-End y en
                                ocasiones en el Back-End sin embargo, mi gusta aprender cualquier
                                cosa sobre programación.
                            </p>
                            <p className='lh-base'>
                                Actualmente, estoy en proceso para obtener mi título y en
                                busca de un trabajo.
                            </p>
                        </div>
                        <div className="col-12 col-md-4 d-flex flex-column gap-3">
                            <h2 className='h2 text-center fw-bolder'>Soft Skills</h2>
                            <ul className='d-flex flex-column gap-2 align-items-center align-items-sm-start'>
                                <li>Responsable</li>
                                <li>Dedicado</li>
                                <li>Meticuloso</li>
                                <li>Organizado</li>
                                <li>Trabajo en equipo</li>
                                <li>Comunicación</li>
                                <li>Pensamiento crítico</li>
                                <li>Empatía</li>
                                <li>Trabajar bajo prensión</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutMeSection
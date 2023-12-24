import React from 'react';
import './projectsSection.css';
import { projects } from './projects';

export const ProjectsSection = () => {
    return (
        <>
            <div className="container-fluid projectsSection py-5">
                <div className="row">
                    <h2 className='h2 text-center mb-5'>Proyectos</h2>
                    <div className="col-12 d-flex gap-5 justify-content-center flex-wrap">
                        {projects.map((project, key) => {
                            return (
                                <div key={key} className="card mb-3 container-projectsSection rounded-4">
                                    <img width="100%" height="50%" src={`../assets/profesional/${project.image}`} className="card-img-top rounded-top-4" alt="Project image" />
                                    <div className="card-body d-flex flex-column justify-content-between gap-3 h-50 overflow-auto">
                                        <div className='d-flex flex-column gap-3'>
                                            <div className='projectsSection-data d-flex flex-column gap-3'>
                                                <h5 className='h5 mb-0 fw-bolder  card-title'>{project.name}</h5>
                                                <p className='card-text'>{project.place}</p>
                                                <p className='card-text'>Implemento:</p>
                                            </div>
                                            <div className='projectsSection-technologies d-flex flex-wrap'>
                                                {project.technologies.map((technology,key) => {
                                                    return (
                                                        <span key={key}>{technology}</span>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                        <div className='projectsSection-urls d-flex gap-4'>
                                            <a href={project.demoUrl} className='text-decoration-none fw-bolder card-link"'>Ver demo <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0z" />
                                                <path fillRule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
                                            </svg></a>
                                            {project.repository ?
                                                <a href={project.repository} className='text-decoration-none fw-bolder'>Repositorio <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                                                </svg></a> : <p className='fw-bolder'>Repositorio Privado</p>}
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

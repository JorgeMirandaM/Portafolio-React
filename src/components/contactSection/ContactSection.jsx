import React from 'react'
import './contactSection.css';
import contactImage from '../../assets/contacto/contacto.png'

export const ContactSection = () => {
    return (
        <>
            <div className="container-fluid contactSection py-5 mb-5">
                <div className="container py-5">
                    <div className="row">
                        <div className="d-none d-lg-block col-lg-5">
                            <img src={contactImage} alt="" width="100%" height="100%" />
                        </div>
                        <div className="col-12 col-lg-7 d-flex flex-column justify-content-between">
                            <h2 className='h2'>Contacto</h2>
                            <div className='mb-3'>
                                <p className='mb-2'>¿Quieres contactarme?</p>
                                <p className='text-justify'>
                                    Complete el siguiente formulario y me pondré en contacto con
                                    usted lo antes posible.
                                </p>
                            </div>
                            <form action="" className='d-flex flex-column gap-4 contactForm'>
                                <div className="form-floating">
                                    <input type="text" className='form-control' id='inputNombre' placeholder='Nombre' aria-describedby="validationNombre" required />
                                    <label htmlFor="inputNombre">Nombre</label>
                                    <div id='validationNombre' className="invalid-feedback">
                                        Please choose a username.
                                    </div>
                                </div>
                                <div className="form-floating">
                                    <input type="email" className='form-control' id='inputEmail' placeholder='email@gmail.com' aria-describedby="validationEmail" required />
                                    <label htmlFor="inputEmail">Correo</label>
                                    <div id='validationEmail' className="invalid-feedback">
                                        Please choose a username.
                                    </div>
                                </div>
                                <div className="form-floating">
                                    <input type="text" className='form-control' id='inputAsunto' placeholder='Asunto' required />
                                    <label htmlFor="inputAsunto">Asunto</label>
                                </div>
                                <div className="form-floating">
                                    <textarea className="form-control" placeholder="Mensaje" id="textareaMensaje" required></textarea>
                                    <label htmlFor="textareaMensaje">Mensaje</label>
                                </div>
                                <div>
                                    <button type="submit" className="btn btn-primary px-4 py-2">Enviar Mensaje</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

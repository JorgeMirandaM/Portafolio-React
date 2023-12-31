import React from 'react'
import './contactSection.css';
import contactImage from '../../assets/contacto/contacto.png'
import { useForm } from '../../hooks/useForm';

const formData = {
    name: "",
    email: "",
    topic: "",
    message: ""
}

const formValidations = {
    name: [(value) => value && value.trim().length <= 1 ? "El nombre debe ser mayor a 1 caracter" : null],
    email: [(value) => { const regex = /^(\S+)@(\S+)(\.\S+)+$/; return value && !regex.test(value) ? 'Correo invalido' : null; }],
    topic: [(value) => value && value.trim().length <= 1 ? "El nombre debe ser mayor a 1 caracter" : null],
    message: [(value) => { const regex = /^(\S+){20,255}$/; return value && !regex.test(value) ? "El mensaje debe tener mas de 15 caracteres" : null; }]
}



export const ContactSection = () => {

    const { formState, onInputChange, isFormValid, nameValid, emailValid, topicValid, messageValid } = useForm(formData, formValidations);

    const { name, email, topic, message } = formState;



    const onSubmit = (e) => {
        e.preventDefault()
        if (!isFormValid) {
            e.stopPropagation();
        }

    }

    return (
        <>
            <div className="container-fluid contactSection py-5 " id='contacto'>
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
                            <form onSubmit={onSubmit} className={`d-flex flex-column gap-4 contactForm needs-validation`}>
                                <div className="form-floating">
                                    <input type="text" className='form-control' id='inputNombre' placeholder='Nombre'
                                        aria-describedby="validationNombre" name='name' value={name} onChange={onInputChange} required/>
                                    <label htmlFor="inputNombre ">Nombre</label>
                                    {
                                        !!nameValid && <div className="alert alert-danger" role="alert">
                                            {nameValid}
                                        </div>
                                    }
                                </div>
                                <div className="form-floating">
                                    <input type="email" className='form-control' id='inputEmail' placeholder='email@gmail.com'
                                        aria-describedby="validationEmail" name='email' value={email} onChange={onInputChange} required/>
                                    <label htmlFor="inputEmail">Correo</label>
                                    {
                                        !!emailValid && <div className="alert alert-danger" role="alert">
                                            {emailValid}
                                        </div>
                                    }
                                </div>
                                <div className="form-floating">
                                    <input type="text" className='form-control' id='inputAsunto' placeholder='Asunto'
                                        aria-describedby="validationTopic" name='topic' value={topic} onChange={onInputChange} required/>
                                    <label htmlFor="inputAsunto">Asunto</label>
                                    {
                                        !!topicValid && <div className="alert alert-danger" role="alert">
                                            {topicValid}
                                        </div>
                                    }
                                </div>
                                <div className="form-floating">
                                    <textarea className="form-control" placeholder="Mensaje"
                                        aria-describedby="validationMensaje" id="textareaMensaje" name='message' value={message} onChange={onInputChange} required></textarea>
                                    <label htmlFor="textareaMensaje">Mensaje</label>
                                    {
                                        !!messageValid && <div className="alert alert-danger" role="alert">
                                            {messageValid}
                                        </div>
                                    }
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

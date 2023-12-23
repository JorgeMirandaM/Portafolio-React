import React from 'react'
import './academicTrainingSection.css'
import { academicTraining } from './academicTraining'

export const AcademicTrainingSection = () => {
  return (
    <>
      <div className="container-fluid academicTrainingSection py-0 py-sm-5 mb-5">
        <div className="container py-5">
          <div className="row">
            <h2 className='h2 text-center mb-5'>Formación Académica</h2>
            <div className="col-12 d-flex gap-5 justify-content-center flex-wrap">
              {academicTraining.map((item, key) => {

                return (
                  <div key={key} className="container-academicTraining d-flex flex-column gap-2 text-center text-lg-start">
                    <div className='academicTraining-whiteContainer rounded d-flex justify-content-center align-items-center'>
                      <img src={`../assets/academico/${item.instutionlogoImage}`} alt="" />
                    </div>
                    <div className='row d-flex'>
                      <div className="col-10 d-flex flex-column gap-2">
                        <h3>{item.field}</h3>
                        <p>{item.institution}</p>
                      </div>
                      <div className="col d-flex justify-content-center align-items-center">
                      {item.certification ? <a href={item.certificationLink}  target='_blank'>
                        <svg   xmlns="http://www.w3.org/2000/svg"  width="30" height="30" fill="currentColor" className="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                          <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5" />
                          <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z" />
                        </svg>
                      </a>
                       : <></>}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

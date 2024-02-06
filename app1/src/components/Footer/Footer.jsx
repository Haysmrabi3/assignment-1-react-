import React from 'react'
import css from './Footer.module.css'
export default function Footer() {
  return <>
  <div className={`container-fluid ${css.hh}  pt-5 ps-0 pe-0 ` }>
    <div className="row">
        <div className="col-4">
            <div className='mb-5 mt-5 text-center card-body ' >
                <h3 className='text-light  fs-3' >Location</h3>
                <p className='text-light fs-5 m-0 p-0' >2215 John Daniel Drive</p>
                <p className='text-light fs-5  ' >Clark, MO 65243</p>
            </div>
        </div>
        <div className="col-4">
            <div className=' text-center mt-5 card-body' >
                <h3 className='text-light  fs-3  ' >AROUND THE WEB</h3>
                <ul className='d-flex justify-content-center ' >
                    <li className={`list-unstyled   fs-3    `} ><i className={`fa-brands fa-facebook  ${css.border}  `}></i></li>
                    <li className='list-unstyled ms-2 mb-2 fs-3' ><i className={`fa-brands fa-twitter ${css.border} `}></i></li>
                    <li  className='list-unstyled ms-2 mb-2 fs-3'><i className={`fa-brands fa-linkedin ${css.border} `}></i></li>
                    <li  className='list-unstyled ms-2 mb-2 me-4 fs-3' ><i className={`fas fa-globe ${css.border} `}  ></i></li>
                </ul>
            </div>
        </div>
        <div className="col-4 ">
            <div className=' text-center mt-5 card-body'>
                <h3 className='text-light  fs-3   ' >ABOUT FREELANCER</h3>
                <p className='text-light  m-0 p-0' >Freelance is a free to use, licensed Bootstrap theme created by Route</p>
            </div>
        </div>
    </div>
    <div className={`${css.color1} pb-1 pt-1 `} >
        <p>Copyright © Your Website 2021</p>
        </div>
    </div>

  </>
}

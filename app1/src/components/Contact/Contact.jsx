import React from 'react'
import style from './contact.module.css'

export default     function Contact() {
    return <>
    <div className="container">
        <div className={`${style.height}`} >
        <div className={`${style.margine}`} >
    <h2>PORTFOLIO COMPONENT</h2>
    </div>
    <div className={`${style.line} `} >
                <i className={`fa-solid fa-star  `}></i>
                </div>

                <div className=' ' >
                    <form  action="">
                    <input    placeholder='userName' className='form-control w-75 mt-5 m-auto'  type="text" />
                    <input    placeholder='userNumber' className='form-control w-75 mt-4 m-auto'  type="number" />
                    <input    placeholder='userEmail' className='form-control w-75 mt-4 m-auto'  type="email" />
                    <input    placeholder='userPassword' className='form-control w-75 mt-4 m-auto'  type="password" />
                    <button className={`mt-5  btn btn-danger`}>Send Message</button>
                    </form>
        </div>
        </div>


    </div>
    </>
}
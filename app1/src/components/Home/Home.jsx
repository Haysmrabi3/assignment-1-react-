import React from 'react'
import img from '../../Asets/download.jpg'
import style from './Home.module.css'
export default function Home() {
  return <>
    <div className={`${style.height}  d-flex `} >
    <div className={`text-center`}>
    <div className={`${style.img}`} >
    <img src={img} className='w-100' alt="Avatar" />
    </div>
    <h1 className={`fs-1 text-light mt-4     `} >  START FRAMEWORK</h1>

    <div className={` ${style.line}  `}>
    <i className={`fa-solid fa-star  `}></i>
    </div>
    <p className='mt-3  text-light fs-5 '  >Graphic Artist - Web Designer - Illustrator</p>
    </div>

    </div>
  </>
}


import React from 'react'
  import gg from '../About/About.module.css'



 export default function About() {
    return <>
    <div className={`${gg.height} ${gg.ss} `} >
        <div className={` text-center ${gg.width} `} >
                <h2 className='fs-1 text-light ' >ABOUT COMPONENT</h2>
                <div className={`${gg.line} `} >
                <i className={`fa-solid fa-star  `}></i>
                </div>
                <div className="row  mt-4">
                    <div className="col-6">
                    <div className='fs-5 text-light' >
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa esse assumenda eius aliquam fugit, soluta reprehenderit natus illum exercitationem minima?</p>
                    </div>
                    </div>
                    <div className="col-6">
                    <div className='fs-5 text-light'>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa esse assumenda eius aliquam fugit, soluta reprehenderit natus illum exercitationem minima?</p>
                    </div>
                    </div>
                </div>
        </div>
    </div>
    </>
}
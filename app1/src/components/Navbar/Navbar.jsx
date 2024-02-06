import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import style from  './Navbar.module.css'


export default function Navbar() {



  return <>
  <nav className={`${style.index} fixed-top   navbar navbar-expand-lg bg-body-tertiary  p-0`}>
  <div className={`${style.hh}  container-fluid `}>
    <div className="container d-flex mt-3 mb-5 ">
    <a class={`${style.color} navbar-brand fs-1 text-light  `} href="#">START FRAMEWORK</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto   ">
        <li className="nav-item">
          <Link className={`${style.color}  text-light nav-link fs-3`}   to="About">About</Link>
        </li>
        <li className="nav-item">
          <Link className={`${style.color} text-light ms-2 me-2 nav-link fs-3`}   to={"PORTFOLIO"}>Portfolio</Link>
        </li>
        <li className="nav-item">
          <Link className={`${style.color} text-light  nav-link fs-3`}  to={"Contact"}>Contact</Link>
        </li>
      </ul>
    </div>
    </div>
  </div>
</nav>
  </>
}

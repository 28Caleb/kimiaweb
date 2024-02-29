import React from 'react'
import './Navbar.css'
import {NavLink, Link} from 'react-router-dom'
import NavTop from './NavTop/NavTop'
import Navblack from './Navblack/Navblack'
import { BsGrid } from "react-icons/bs";



const Navbar = () => {

  return (
    <div className='container-fluid fluid'>
      <div className='row'>
        <div className='col-12 col-md-12 col-sm-12 col-lg-12'>
        {/* Components de la NavBlack du header */}
        <Navblack/>
        {/* Components de la navTop du header */}
          <NavTop/>
          <nav class="navbar navbar-expand-lg navbar-light bg-white">
            <div class="container-fluid">
              
              <Link to ='/' className="fw-bold text-decoration-none"><span className='category  fw-bold'><BsGrid /></span> Catégories</Link>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon "></span>
              </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <NavLink to='/' className="nav-link fw-bold" aria-current="page" >Home</NavLink>
                </li>
                <li class="nav-item">
                  <NavLink to='/shop' className="nav-link fw-bold" >Boutiques</NavLink>
                </li>
                <li class="nav-item">
                  <NavLink to='/thriftshop' className="nav-link fw-bold" >Fripérie</NavLink>
                </li>
                <li class="nav-item">
                  <NavLink to='/account' className="nav-link fw-bold" >Mon compte</NavLink>
                </li>
                
                <li class="nav-item">
                  <NavLink to='/about' className="nav-link fw-bold" >A Propos</NavLink>
                </li>
                <li class="nav-item">
                  <NavLink to='/contact' className="nav-link fw-bold"  >Contact</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        </div>
      </div>
    </div>
  )
}
export default Navbar;
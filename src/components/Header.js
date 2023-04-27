import React from 'react'
import image from '../assets/images'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <header className="wrapper">
        <nav className="navbar navbar-expand-lg center-nav transparent position-absolute navbar-dark px-md-10 px-xxl-0">
          <div className="container flex-lg-row flex-nowrap align-items-center">
            <div className="navbar-brand w-100">
              <Link to="/services">
                <img className="logo-dark pe-logo" src={image.Logo} srcset={image.Logo} alt="" />
                <img className="logo-light pe-logo" src={image.Logo} srcset={image.Logo} alt="" />
              </Link>
            </div>
            <div className="navbar-collapse offcanvas offcanvas-nav offcanvas-start">
              <div className="offcanvas-header d-lg-none">
                <h3 className="text-white fs-30 mb-0">Sandbox</h3>
                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div className="offcanvas-body ms-lg-auto d-flex flex-column h-100">
                <ul className="navbar-nav">
                  <li className="nav-item dropdown dropdown-mega">
                    <Link className="nav-link " to="/">Home</Link>
                  </li>
                  <li className="nav-item dropdown">
                    <Link className="nav-link " to="/services" >Services</Link>
                  </li>
                  <li className="nav-item dropdown">
                    <Link className="nav-link" to="/projects" >Projects</Link>
                  </li>
                  <li className="nav-item dropdown">
                    <Link className="nav-link" to="/track&trace">Track & Trace</Link>
                  </li>
                  <li className="nav-item dropdown dropdown-mega">
                    <Link className="nav-link" to="/faqs" >Help & FAQs</Link>
                  </li>
                  <li className="nav-item dropdown dropdown-mega">
                    <a className="nav-link" href="/contact">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="navbar-other w-100 d-flex ms-auto">
              <ul className="navbar-nav flex-row align-items-center ms-auto">
                <li className="nav-item"><a href="#" class="btn btn-primary rounded">Request A Quote</a></li>
                <li class="nav-item d-lg-none">
                  <button class="hamburger offcanvas-nav-btn"><span></span></button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header
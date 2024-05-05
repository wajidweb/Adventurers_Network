import React from "react";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div className="">
      <nav className="navbar navbar-expand-lg navbar-light " style={{backgroundColor: "#221f4a"}}>
        <div className="container">
          <Link to='/' className="navbar-brand w-50 h-10 rounded" href="#">
           <img src="/assets/logo.png" className="w-50 h-10 rounded" alt="logo"  />
          </Link>
          <button
            className="navbar-toggler bg-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent" >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active text-light" aria-current="page" href="#">
                  HOME
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link text-light" href="#">
                  ABOUT
                </Link>
              </li>

            </ul>
            
          </div>
        </div>
      </nav>
    </div>
  );
}

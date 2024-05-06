import React from "react";
import { Link } from "react-router-dom";
import { RiWechatPayFill } from "react-icons/ri";
import { PiPencilRulerFill } from "react-icons/pi";
import { GiUpgrade } from "react-icons/gi";


export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg  " style={{backgroundColor: "rgb(238,238,238)"}}>
      <div className="container">
        <div className="d-flex flex-column align-items-center justify-content-center">
          <img
            src="/assets/logo.png"
            alt="logo"
            className="img-fluid"
            width="40px"
            height="30px"
          />
          <p style={{ color: "#f3b54c", textAlign: "center" }}>
            <span style={{ color: "#26a9e1" }}>ADVENTURERS.</span>NETWORK
          </p>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse ms-5"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link">
              <RiWechatPayFill /> Forum
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
              <PiPencilRulerFill /> Rules
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
              <GiUpgrade /> Upgrade
              </Link>
            </li>
          </ul>
          <form className="d-flex w-50">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search..."
              aria-label="Search"
            />
          </form>
          <div className="ms-lg-2">
            <button className="btn me-2  btn-outline" style={{borderColor: "rgb(38,169,225)", color: "rgb(38,169,225)"}}>Login</button>
            <button className="btn text-white" style={{backgroundColor: "rgb(38,169,225)"}}>Sign Up</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

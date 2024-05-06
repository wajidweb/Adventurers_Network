import React from "react";
import { Link } from "react-router-dom";
import { FaPaintBrush } from "react-icons/fa";
import { MdBrightness4 } from "react-icons/md";

export default function Footer() {
  return (
    <div className="mt-2">
      <footer
        className=" text-center text-lg-start text-black"
        style={{ backgroundColor: "rgb(242,242,242)" }}
      >
        {/* Grid container */}
        <div className="container p-4">
          {/*Grid row*/}
          <div className="row">
            {/*Grid column*/}
            <div className="col-lg-6 col-md-12 mb-4 mb-md-0 d-flex flex-row text-secondary">
                <div className="d-flex flex-row ">
               <FaPaintBrush />
                    <p className="ms-2">Style Chooser</p>
                </div>
                <div className="d-flex flex-row ms-4">
                <MdBrightness4 />
                    <p className="ms-2">Light / Dark</p>
                </div>
            </div>

            <div className="col-lg-6 col-md-12 mb-4 mb-md-0 d-flex justify-content-end">
              <ul class="nav">
                <li class="nav-item">
                  <a class="nav-link text-secondary" href="#">
                    Contact Us
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-secondary" href="#">
                    Terms and rule
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-secondary" href="#">
                    Privacy Policy
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-secondary" href="#">
                    Help
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          Adventurers Network - @All Rights Reserved
        </div>
      </footer>
    </div>
  );
}

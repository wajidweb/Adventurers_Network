import React from "react";
import { FaAngleRight } from "react-icons/fa";
import { BsLightningChargeFill } from "react-icons/bs";
import { ImStatsDots } from "react-icons/im";
import { TiMessages } from "react-icons/ti";
import { FaMessage } from "react-icons/fa6";
import { FaNewspaper } from "react-icons/fa";
import { ImNewspaper } from "react-icons/im";
import { GiCoffeeCup } from "react-icons/gi";
import { MdViewComfyAlt } from "react-icons/md";
import { FaUsers } from "react-icons/fa6";
import { FaBook } from "react-icons/fa";

export default function Home() {
  return (
    <div className="container">
      <section className="container-fluid p-4">
        <p>
          Formus <FaAngleRight />{" "}
        </p>

        <div className="d-flex justify-content-end align-items-center">
          <div className="me-4">
            <form>
              <div className="input-group ">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your search query"
                  aria-label="Search"
                  aria-describedby="button-addon2"
                />
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  id="button-addon2"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
          <div className="d-flex justify-content-end align-items-center">
            <button type="button" class="btn btn-secondary ps-4 pe-4">
              <BsLightningChargeFill /> <span>New Posts</span>
            </button>
          </div>
        </div>
      </section>

      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="left-side p-4">
                {/* ///content  */}
                <section>
                  <div
                    className="accordion"
                    id="accordionPanelsStayOpenExample"
                  >
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        id="panelsStayOpen-headingOne"
                      >
                        <button
                          className="accordion-button bg-secondary text-white"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#panelsStayOpen-collapseOne"
                          aria-expanded="true"
                          aria-controls="panelsStayOpen-collapseOne"
                        >
                          Meta
                        </button>
                      </h2>
                      <div
                        id="panelsStayOpen-collapseOne"
                        className="accordion-collapse collapse show" // Add the 'show' class here
                        aria-labelledby="panelsStayOpen-headingOne"
                      >
                        <div className="accordion-body">
                          <div className="d-flex flex-row align-items-center justify-content-between">
                            <div className="d-flex align-items-center justify-content-center">
                              <FaNewspaper style={{ fontSize: "30px" }} />
                            </div>
                            <div className="d-flex flex-column">
                              <p>News & Announcements</p>
                              <p
                                style={{ fontSize: "10px" }}
                                className="text-wrap"
                              >
                                Stay up to date with the latest news and updates
                                to <br /> the site , including rule changes and
                                feature addition.
                              </p>
                            </div>
                            <div className="d-flex flex-column">
                              <p>Threads</p>
                              <p>236</p>
                            </div>
                            <div className="d-flex flex-column">
                              <p>Messages</p>
                              <p>2.9k</p>
                            </div>
                            <div className="d-flex flex-row">
                              <div style={{ width: "50px", height: "50px" }}>
                                <img
                                  src="https://i.pinimg.com/474x/98/51/1e/98511ee98a1930b8938e42caf0904d2d.jpg"
                                  className="rounded"
                                  style={{ width: "50px", height: "50px" }}
                                  alt="user"
                                />
                              </div>
                              <div className="d-flex flex-column">
                                <div className="d-flex flex-row align-items-center justify-content-center">
                                  <div className="ms-2">
                                    {" "}
                                    <button
                                      type="button"
                                      class="btn btn-danger"
                                    >
                                      News
                                      <ImNewspaper className="ms-2" />
                                    </button>
                                  </div>
                                  <div>
                                    <p className="ms-2">Discord Server</p>
                                  </div>
                                </div>
                                <div className="ms-2">
                                  <p>
                                    Yesterday at 11:41 PM.{" "}
                                    <span className="text-danger">
                                      King Nothing
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        id="panelsStayOpen-headingTwo"
                      >
                        <button
                          className="accordion-button collapsed bg-secondary text-white"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#panelsStayOpen-collapseTwo"
                          aria-expanded="false"
                          aria-controls="panelsStayOpen-collapseTwo"
                        >
                          Neet
                        </button>
                      </h2>
                      <div
                        id="panelsStayOpen-collapseTwo"
                        className="accordion-collapse collapse show" // Add the 'show' class here
                        aria-labelledby="panelsStayOpen-headingTwo"
                      >
                        <div className="accordion-body">
                          <div className="d-flex flex-row align-items-center justify-content-between border-bottom mb-2">
                            <div className="d-flex align-items-center justify-content-center">
                              <FaUsers style={{ fontSize: "30px" }} />
                            </div>
                            <div className="d-flex flex-column">
                              <p>NEET Lifestyle</p>
                              <p
                                style={{ fontSize: "10px" }}
                                className="text-wrap"
                              >
                                Stay up to date with the latest news and updates
                                to <br /> the site , including rule changes and
                                feature addition.
                              </p>
                            </div>
                            <div className="d-flex flex-column">
                              <p>Threads</p>
                              <p>6.1k</p>
                            </div>
                            <div className="d-flex flex-column">
                              <p>Messages</p>
                              <p>80k</p>
                            </div>
                            <div className="d-flex flex-row">
                              <div style={{ width: "50px", height: "50px" }}>
                                <img
                                  src="https://assets.entrepreneur.com/content/3x2/2000/20150406145944-dos-donts-taking-perfect-linkedin-profile-picture-selfie-mobile-camera-2.jpeg?format=pjeg&auto=webp&crop=1:1"
                                  className="rounded"
                                  style={{ width: "50px", height: "50px" }}
                                  alt="user"
                                />
                              </div>
                              <div className="d-flex flex-column">
                                <div className="d-flex flex-row align-items-center justify-content-center">
                                  <div className="ms-2">
                                    {" "}
                                    <button type="button" class="btn btn-info">
                                      comfy
                                      <MdViewComfyAlt className="ms-2" />
                                    </button>
                                  </div>
                                  <div>
                                    <p className="ms-2">
                                      NEETing as a minimalist
                                    </p>
                                  </div>
                                </div>
                                <div className="ms-2">
                                  <p>
                                    17 minuts ago.{" "}
                                    <span className="text-danger">
                                      RageSpike
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* // second ? */}
                          <div className="d-flex flex-row align-items-center justify-content-between">
                            <div className="d-flex align-items-center justify-content-center">
                            <FaBook  style={{ fontSize: "30px" }} />
                            </div>
                            <div className="d-flex flex-column">
                              <p>Anime & Manga</p>
                              <p
                                style={{ fontSize: "10px" }}
                                className="text-wrap"
                              >
                                Stay up to date with the latest news and updates
                                to <br /> the site , including rule changes and
                                feature addition.
                              </p>
                            </div>
                            <div className="d-flex flex-column">
                              <p>Threads</p>
                              <p>999</p>
                            </div>
                            <div className="d-flex flex-column">
                              <p>Messages</p>
                              <p>15.1k</p>
                            </div>
                            <div className="d-flex flex-row">
                              <div style={{ width: "50px", height: "50px" }}>
                                <img
                                  src="https://expertphotography.b-cdn.net/wp-content/uploads/2018/10/cool-profile-pictures-aperture.jpg"
                                  className="rounded"
                                  style={{ width: "50px", height: "50px" }}
                                  alt="user"
                                />
                              </div>
                              <div className="d-flex flex-column">
                                <div className="d-flex flex-row align-items-center justify-content-center">
                                  <div className="ms-2">
                                    {" "}
                                    <button type="button" class="btn btn-info">
                                      comfy
                                      <MdViewComfyAlt className="ms-2" />
                                    </button>
                                  </div>
                                  <div>
                                    <p className="ms-2">
                                      Reading Kingdom is so epic
                                    </p>
                                  </div>
                                </div>
                                <div className="ms-2">
                                  <p>
                                    Toay at 6:42 PM. 
                                    <span className="text-danger">
                                      Pikabro
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        id="panelsStayOpen-headingThree"
                      >
                        <button
                          className="accordion-button collapsed bg-secondary text-white"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#panelsStayOpen-collapseThree"
                          aria-expanded="false"
                          aria-controls="panelsStayOpen-collapseThree"
                        >
                          Off Topic
                        </button>
                      </h2>
                      <div
                        id="panelsStayOpen-collapseThree"
                        className="accordion-collapse collapse show" // Add the 'show' class here
                        aria-labelledby="panelsStayOpen-headingThree"
                      >
                        <div className="accordion-body">
                          <div className="d-flex flex-row align-items-center justify-content-between">
                            <div className="d-flex align-items-center justify-content-center">
                              <GiCoffeeCup style={{ fontSize: "30px" }} />
                            </div>
                            <div className="d-flex flex-column">
                              <p>The Cafe</p>
                              <p
                                style={{ fontSize: "10px" }}
                                className="text-wrap"
                              >
                                Stay up to date with the latest news and updates
                                to <br /> the site , including rule changes and
                                feature addition.
                              </p>
                            </div>
                            <div className="d-flex flex-column">
                              <p>Threads</p>
                              <p>40.7k</p>
                            </div>
                            <div className="d-flex flex-column">
                              <p>Messages</p>
                              <p>15.1k</p>
                            </div>
                            <div className="d-flex flex-row">
                              <div style={{ width: "50px", height: "50px" }}>
                                <img
                                  src="https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/short/linkedin-profile-picture-maker/dummy_image/thumb/004.webp"
                                  className="rounded"
                                  style={{ width: "50px", height: "50px" }}
                                  alt="user"
                                />
                              </div>
                              <div className="d-flex flex-column">
                                <div className="d-flex flex-row align-items-center justify-content-center">
                                  <div className="ms-2">
                                    {" "}
                                    <button
                                      type="button"
                                      class="btn btn-primary"
                                    >
                                      Discussion
                                      <FaMessage className="ms-2" />
                                    </button>
                                  </div>
                                  <div>
                                    <p className="ms-2">What music genre</p>
                                  </div>
                                </div>
                                <div className="ms-2">
                                  <p>
                                    3 minutes ageo
                                    <span className="text-danger">
                                      King Nothing
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <div className="right-side p-4">
                {/* newest threads  */}
                <section className="bg-secondary p-2 rounded">
                  <div className="p-2 border-bottom">
                    <h5 className="text-white">
                      <TiMessages />
                      <span className="ms-1">Newest Threads</span>
                    </h5>
                  </div>
                  <div className="d-flex flex-column ">
                    <div className="row">
                      {/* Left side with profile image and text */}
                      <div className="col-md-3 d-flex align-items-start justify-content-center ">
                        <div className="mt-2">
                          <img
                            src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                            alt="Profile Image"
                            className="profile-img rounded"
                            style={{ width: "50px", height: "50px" }}
                          />
                        </div>
                      </div>
                      {/* Right side with three small texts */}
                      <div className="col-md-9 text-white">
                        <div>
                          <p className="text-white mt-3">
                            <span className="bg-primary p-2 rounded ">
                              {" "}
                              <FaMessage />
                              <span className="ms-1 "> Discussion </span>{" "}
                            </span>
                            I want to sell my soul to the devil
                          </p>
                        </div>
                        <p>Started by uglybrat . 14 minutes ago</p>
                        <p>Replies: 3</p>
                        <p>The Cafe</p>
                      </div>
                    </div>
                    <div className="row">
                      {/* Left side with profile image and text */}
                      <div className="col-md-3 d-flex align-items-start justify-content-center ">
                        <div className="mt-2">
                          <img
                            src="https://previews.123rf.com/images/vadimgozhda/vadimgozhda1508/vadimgozhda150800660/43022874-portrait-of-happy-handsome-guy-sitting-at-city-park-near-the-fence-with-his-bicycle.jpg"
                            alt="Profile Image"
                            className="profile-img rounded"
                            style={{ width: "50px", height: "50px" }}
                          />
                        </div>
                      </div>
                      {/* Right side with three small texts */}
                      <div className="col-md-9 text-white">
                        <div>
                          <p className="text-white mt-3">
                            <span className="bg-primary p-2 rounded ">
                              {" "}
                              <FaMessage />
                              <span className="ms-1 "> Discussion </span>{" "}
                            </span>
                            I want to sell my soul to the devil
                          </p>
                        </div>
                        <p>Started by uglybrat . 14 minutes ago</p>
                        <p>Replies: 3</p>
                        <p>The Cafe</p>
                      </div>
                    </div>
                    <div className="row">
                      {/* Left side with profile image and text */}
                      <div className="col-md-3 d-flex align-items-start justify-content-center ">
                        <div className="mt-2">
                          <img
                            src="https://media.istockphoto.com/id/1311084168/photo/overjoyed-pretty-asian-woman-look-at-camera-with-sincere-laughter.webp?b=1&s=170667a&w=0&k=20&c=XPuGhP9YyCWquTGT-tUFk6TwI-HZfOr1jNkehKQ17g0="
                            alt="Profile Image"
                            className="profile-img rounded"
                            style={{ width: "50px", height: "50px" }}
                          />
                        </div>
                      </div>
                      {/* Right side with three small texts */}
                      <div className="col-md-9 text-white">
                        <div>
                          <p className="text-white mt-3">
                            <span className="bg-primary p-2 rounded ">
                              {" "}
                              <FaMessage />
                              <span className="ms-1 "> Discussion </span>{" "}
                            </span>
                            I want to sell my soul to the devil
                          </p>
                        </div>
                        <p>Started by uglybrat . 14 minutes ago</p>
                        <p>Replies: 3</p>
                        <p>The Cafe</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* // statistic // */}
                <section className="bg-secondary p-2 rounded mt-4">
                  <div className="p-2 border-bottom">
                    <h5 className="text-white">
                      <ImStatsDots />{" "}
                      <span className="ms-1">Forum statistics</span>
                    </h5>
                  </div>
                  <div className="d-flex flex-column justify-content-start align-items-center">
                    <div className="container-fluid d-flex flex-row justify-content-between align-items-center pt-2  text-white">
                      <p>Threads: </p>
                      <p>48,022</p>
                    </div>
                    <div className="container-fluid d-flex flex-row justify-content-between align-items-center pt-2  text-white">
                      <p>Messages: </p>
                      <p>523,022</p>
                    </div>
                    <div className="container-fluid d-flex flex-row justify-content-between align-items-center pt-2  text-white">
                      <p>Members: </p>
                      <p>1,583</p>
                    </div>
                    <div className="container-fluid d-flex flex-row justify-content-between align-items-center pt-2  text-white">
                      <p>Newest NEET: </p>
                      <p>joaosembracol12</p>
                    </div>
                    <div className="container-fluid d-flex flex-row justify-content-between align-items-center pt-2  text-white">
                      <p>mEMBER TIME ONLINE: </p>
                      <p>8388d 13h 19m</p>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
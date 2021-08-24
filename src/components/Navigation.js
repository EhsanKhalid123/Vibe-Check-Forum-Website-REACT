// Importing React classes and functions from node modules
import React from "react";

// Functional Component for Navigation Bar
function Navigation() {

  // Returns HTML code from this function which is displayed by importing on other pages
  return (
    // Navigation bar Code adapted from Official Bootstrap Documents, I made changes to it
    // https://getbootstrap.com/docs/4.0/components/navbar/

    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#f0f0f0" }}>
      <div className="container">
        <a className="navbar-brand" href="/">
          {/* Favicon IMAGE REFERENCE: Image was taken from free icon providers https://www.flaticon.com/ */}
          <img className="navbar-brand" src={'assets/images/Vibe Check - Navbar.png'} width="150px" alt="Icon for Vibe Check" />
          {/* <img className="navbar-brand" src={process.env.PUBLIC_URL + '/favicon.png'} width="50px" /> */}
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/Home">Home</a>
            </li>
            {/* <li class="nav-item">
              <a class="nav-link" href="#">My Profile</a>
            </li> */}
          </ul>
          <div className="form-inline my-2 my-lg-0">
            <a href="/Sign-up">
              <button className="btn btn-outline-success mr-sm-2" type="submit">Sign-up</button>
            </a>
            <a href="/Sign-in">
              <button className="btn btn-warning my-2 my-sm-0" type="submit">Sign-in</button>
            </a>
          </div>
        </div>
      </div>
    </nav>

  );
}

// Export the Navigation Function
export default Navigation;
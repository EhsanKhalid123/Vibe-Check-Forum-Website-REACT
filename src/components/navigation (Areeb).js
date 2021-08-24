// Importing React classes and functions from node modules
import React from "react";

// Functional Component for Navigation Bar
function navigation(props) {

    // Returns HTML code from this function which is displayed by importing on other pages
    return (
        // Navigation bar Code adapted from Official Bootstrap Documents, I made changes to it
        // https://getbootstrap.com/docs/4.0/components/navbar/

        <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: "#f0f0f0"}}>
            <div className="container">
                <a className="navbar-brand" href="/">
                    {/* Favicon IMAGE REFERENCE: Image was taken from free icon providers https://www.flaticon.com/ */}
                    <img className="navbar-brand" src={'assets/images/Vibe Check - Navbar.png'} width="150px" alt="Icon for Vibe Check"/>
                    {/* <img className="navbar-brand" src={process.env.PUBLIC_URL + '/favicon.png'} width="50px" /> */}
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">

                        <li className="nav-item active">
                            <a className="nav-link" onClick={() => props.navigateTo('home')}>Home</a>
                        </li>

                    </ul>

                    <div className="form-inline my-2 my-lg-0">

                        <a onClick={() => props.navigateTo('sign-up')}>
                            <button className="btn btn-outline-success mr-sm-2">Sign-up</button>
                        </a>

                        <a onClick={() => props.navigateTo('sign-in')}>
                            <button className="btn btn-warning my-2 my-sm-0">Sign-in</button>
                        </a>

                    </div>
                </div>
            </div>
        </nav>

    );
}

// Export the Navigation Function
export default navigation;
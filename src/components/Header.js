// Importing React classes and functions from node modules
import React from "react";

// Functional Component for header
function Header() {

    // Returns HTML elements and contents to display on page
    return (

        // Bootstrap classes used to style the header using simple HTML elements
        // Code adapted from https://mdbootstrap.com/docs/standard/navigation/headers/

        // Header Code uses simple HTML elements
        // url(" + "URL LINK HERE" + ") - Note to self Syntax for using websites for images
        // IMAGE REFERENCE: Image taken from free image provider website https://unsplash.com/ 
        <div className="p-5 text-center bg-image" style={{ backgroundImage: "url(assets/images/john-towner-89PFnHKg8HE-unsplash.jpg)", height: "200px" }}>
            <div className="mask" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', height: "100px" }}>
                <div className="d-flex justify-content-center align-items-center h-100">
                    <div className="text-white">
                        <h1 className="mb-3">Vibe Check</h1>
                        <h4 className="mb-3">Student's Networking Forum</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Export the Navigation Function
export default Header;
// Importing React classes and functions from node modules
import React from "react";

// Functional Component for MyProfile
function MyProfile(props) {

    // Returns HTML elements and contents to display on page
    return (
        <div>
            <h1 className="display-4">My Profile</h1>
            <h4><strong>Hello {props.username}!</strong></h4>
        </div>
    );
}

// Export the MyProfile Function
export default MyProfile;
// Importing React classes and functions from node modules
import React, { useState } from "react";

// Functional Component for Login Page
function Login() {

    // Returns HTML elements and content to display on the pages
    return (

        // Login Form Code
        <div>
            <h1 className="text-center mb-3" style={{ padding: "50px 20px 0 20px" }}>Sign In</h1>
            <hr style={{ width: "50%", marginBottom: "20px", borderWidth: "1px", backgroundColor: "#5dc7d8" }} />
            <p>&nbsp;</p>
            <form className="login-form">
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" className="form-control" id="email" name="email" placeholder="Please enter your email" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" className="form-control" id="password" name="password" placeholder="Please enter your Password" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                <p>&nbsp;</p>
                <h3 id="Success" style={{visibility: "hidden"}}>.</h3>
            </form>

        </div>
    );
}

// Export the Login Function
export default Login;
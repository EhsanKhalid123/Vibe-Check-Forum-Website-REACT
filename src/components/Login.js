// Importing React classes and functions from node modules
import React, { useState } from "react";
import { getUser, verifyUser, getEmail, getDateJoined } from "../data/repository";

// Functional Component for Login Page
function Login(props) {
    const [fields, setFields] = useState({ email: "", password: "" });
    const [errorMessage, setErrorMessage] = useState(null);
  
    // Generic change handler.
    const handleInputChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
  
      // Copy fields.
      const temp = { email: fields.email, password: fields.password };
      // OR use spread operator.
      // const temp = { ...fields };
  
      // Update field and state.
      temp[name] = value;
      setFields(temp);

      setErrorMessage(null);

    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      const verified = verifyUser(fields.email, fields.password);
  
      // If verified login the user.
      if(verified === true) {
        props.loginUser(getUser(), getEmail(), getDateJoined());
  
        // Navigate to the home page.
        props.history.push("/MyProfile");
        return;
      }
  
      // Reset password field to blank.
      const temp = { ...fields };
      temp.password = "";
      setFields(temp);
  
      // Set error message.
      setErrorMessage("Username and / or password invalid, please try again.");
    }

    // Returns HTML elements and content to display on the pages
    return (

        // Code adapted from Official Bootstrap Documents:
        // https://getbootstrap.com/docs/4.0/components/forms/

        // Login Form Code
        <div>
            <h1 className="text-center mb-3" style={{ padding: "50px 20px 0 20px" }}>Sign In</h1>
            <hr style={{ width: "50%", marginBottom: "20px", borderWidth: "1px", backgroundColor: "#5dc7d8" }} />
            <p>&nbsp;</p>
            <form className="login-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" className="form-control" id="email" name="email" placeholder="Please enter your email" value={fields.email} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" className="form-control" id="password" name="password" placeholder="Please enter your Password" value={fields.password} onChange={handleInputChange} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>

                {errorMessage !== null &&
                    <div className="form-group" style={{textAlign: "center", margin: "50px 10px 10px 10px" }} onChange={handleInputChange}>
                        <span className="text-danger" style={{textAlign: "center", fontSize: "20px"}}>{errorMessage}</span>
                    </div>
                }

            </form>
        </div>
    );
}

// Export the Login Function
export default Login;
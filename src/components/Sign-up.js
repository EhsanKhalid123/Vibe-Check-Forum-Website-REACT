// Importing React classes and functions from node modules
import React, { useState } from "react";

// Functional Component for Signup Page
function Sign_up() {

    const [fields, setFields] = useState(
        {
            name: "",
            email: "",
            password: "",
        }
    );


    const handleInputChange = (event) => {
        setFields({ ...fields, [event.target.name]: event.target.value });
        
        document.getElementById('Success').style.visibility = 'hidden'; 
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        var Success = document.getElementById('Success');
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        var pattern=/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)[^ ]{6,}/;
        var name1 = true;
        var email1 = true;
        var password1 = true;

        if (name === ""){
            Success.innerHTML = "Please Enter a Name!"
            Success.style.color = 'red';
            Success.style.textAlign = 'center';
            Success.style.visibility = 'visible'; 
            name1 = false;
        } 

        else if (email === ""){

            Success.innerHTML = "Please Enter an Email!"
            Success.style.color = 'red';
            Success.style.textAlign = 'center';
            Success.style.visibility = 'visible'; 
            email1 = false;
        }

        else if (password === ""){
            Success.innerHTML = "Please Enter a Password!";
            Success.style.color = 'red';
            Success.style.textAlign = 'center';     
            Success.style.visibility = 'visible';  
            password1 = false;      
        } else {
            if (!pattern.test(password)){
                Success.innerHTML = "Please meet password requirements!";
                Success.style.color = 'red';
                Success.style.textAlign = 'center';
                Success.style.visibility = 'visible'; 
                password1 = false;
            }
        }
        
        if (name1 === true && email1===true && password1 === true) {
            localStorage.setItem(fields, JSON.stringify(fields));
            document.getElementById("Success").innerHTML = "Successfully Registered"
            Success.style.color = 'green';
            Success.style.textAlign = 'center';
            Success.style.visibility = 'visible'; 
        }

    }


    // Returns HTML elements and content to display on the pages
    return (

        // Signup Form Code
        <div>
            <h1 className="text-center mb-3" style={{ padding: "50px 20px 0 20px" }}>Sign Up</h1>
            <hr style={{ width: "50%", marginBottom: "20px", borderWidth: "1px", backgroundColor: "#5dc7d8" }} />
            <p>&nbsp;</p>
            <form className="sign-up-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" className="form-control" id="name" name="name" placeholder="Please enter your name" value={fields.name} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" className="form-control" id="email" name="email" placeholder="Please enter your email" value={fields.email} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" className="form-control" id="password" name="password" placeholder="Please enter a Password"  value={fields.password} onChange={handleInputChange} />
                    <small id="emailHelp" className="form-text text-muted">Password must be 6 characters, mix of upper and lowercase, numbers and punctuation</small>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                <p>&nbsp;</p>
                <h3 id="Success" style={{visibility: "hidden"}}>.</h3>
            </form>

        </div>
    );
}

// Export the sign-up Function
export default Sign_up;
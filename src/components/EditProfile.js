// Importing React classes and functions from node modules
import React, { useState } from "react";
import { getUser, getEmail, getPassword } from "../data/repository";
import validate1 from './EditProfile-Validation-Rules';
import useForm from "./useForm";

// Functional Component for MyProfile
function EditProfile() {

    const {
        values,
        errors,
        handleChange,
        handleSubmit,
    } = useForm(validate1);

    return (
        <div>
            <h1 className="text-center mb-3" style={{ padding: "50px 20px 0 20px" }}>Edit Profile</h1>
            <hr style={{ width: "50%", marginBottom: "20px", borderWidth: "1px", backgroundColor: "#5dc7d8" }} />
            <p>&nbsp;</p>
            <form className="sign-up-form" onSubmit={handleSubmit} noValidate>
                <div className="form-group">
                    <label htmlFor="name"><b>Name:</b></label>
                    <input type="text" className="form-control" id="username" name="username" placeholder="Please enter your name" onChange={handleChange} value={values.username} required />
                    {errors.name && (
                        <p style={{ color: "red", textAlign: "center", fontSize: "18px", margin: "10px 10px 10px 10px" }}>{errors.name}</p>
                    )}
                </div>
                <div className="form-group">
                    <label htmlFor="email"><b>Email:</b></label>
                    <input type="email" className="form-control" id="email" name="email" placeholder="Please enter your email" onChange={handleChange} value={values.email} required />
                    {errors.email && (
                        <p style={{ color: "red", textAlign: "center", fontSize: "18px", margin: "10px 10px 10px 10px" }}>{errors.email}</p>
                    )}
                </div>
                <div className="form-group">
                    <label htmlFor="password"><b>Password:</b></label>
                    <input type="password" className="form-control" id="password" name="password" placeholder="Please enter a Password" onChange={handleChange} value={values.password} required />
                    <small id="emailHelp" className="form-text text-muted" style={{ fontWeight: "bold" }}>Password must be 6 characters, mix of upper and lowercase, numbers and punctuation</small>
                    {errors.password && (
                        <p style={{ color: "red", textAlign: "center", fontSize: "18px", margin: "10px 10px 10px 10px" }}>{errors.password}</p>
                    )}
                </div>
                <button type="submit" className="btn btn-danger">cancel</button>
                <button type="submit" className="btn btn-primary">Save</button>
                {values.success && (
                    <h3 style={{ color: "green", textAlign: "center", fontSize: "25px", margin: "50px 10px 10px 10px" }} onChange={handleChange} >{values.success}</h3>
                )}
            </form>
        </div>
    );
}

export default EditProfile;
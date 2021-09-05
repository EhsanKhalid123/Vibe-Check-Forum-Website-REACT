// Importing React classes and functions from node modules
import React, { useState } from "react";
import { deleteAccount, removePost} from "../data/repository";

// Functional Component for MyProfile
function MyProfile(props) {

    const [confirmPopup, setconfirmPopup] = useState(false);

    // Popup Toggle Switch Function
    const togglePopup = () => {
        setconfirmPopup(!confirmPopup);
    }

    const deleteProfile = (event) => {
        deleteAccount();
        removePost();
        togglePopup();
        
        // Navigate to the home page.
        props.logoutUser();
    }

    // Returns HTML elements and contents to display on page
    return (

        // REFERENCE: Some code especially classnames have been adapted from Official Bootstrap Document
        // https://getbootstrap.com/docs/4.0/components/card/

        <div>
            <div className="profile-card">
                <div className="text-center">
                    <p>&nbsp;</p>
                    <h1 className="home-welcome display-4">My Profile</h1>
                    <p>&nbsp;</p>
                    <div className="card">
                        <h5 className="card-header card text-white bg-info">Profile Info</h5>
                        {/* IMAGE REFERENCE: Icon is taken from google fonts who provide free icons */}
                        {/* https://fonts.google.com/icons?selected=Material+Icons:home&icon.query=profile */}
                        <img className="" src={process.env.PUBLIC_URL + 'assets/images/baseline_account_circle_black_24dp.png'} style={{ width: "20%", margin: "20px auto 0 auto" }} alt="Account Picture" />
                        <div className="card-body">
                            <h5 className="card-title">{props.username}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{props.email}</h6>
                            <p className="card-text">This is your profile information, you can choose to edit your profile or delete it!</p>
                            {/* <a href="#" className="card-link">Card link</a>*/}
                            <a href="/EditProfile" className="btn btn-info" style={{ margin: "10px" }}>Edit</a>
                            <a onClick={togglePopup} className="btn btn-danger">Delete</a>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item"><b style={{ color: "red" }}>Note:</b> Login details change on editing profile! Deleting your account will delete all your posts!</li>
                        </ul>
                        <div className="card-footer" style={{ fontWeight: "bold", backgroundColor: "lightgray" }}>Joined: {props.DateJoined}</div>
                    </div>
                </div>
            </div>

            <div>
                {confirmPopup &&
                    <div className="popup-box">
                        <div className="box">
                            <h5 className="card-header bg-warning text-center" style={{ color: "white" }}><b>Confirm!</b></h5>
                            <div style={{ margin: "0 auto", textAlign: "center" }}>
                                <p style={{ padding: "15px", textAlign: "center", color: "red" }}>Are you sure you want delete your account! <br /> This action cannot be undone!</p>
                                <a onClick={togglePopup} className="btn btn-info" style={{ margin: "10px" }}>Cancel</a>
                                <a onClick={deleteProfile} className="btn btn-danger" style={{ margin: "10px" }}>Delete</a>
                            </div>
                        </div>
                    </div>
                }
            </div>

        </div>
    );
}

// Export the MyProfile Function
export default MyProfile;
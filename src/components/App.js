// Importing React classes and functions from node modules
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Importing the components
import Navigation from './Navigation';
import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import Signup from './Sign-up';
import Login from './Login';
import MyProfile from "./MyProfile";
import EditProfile from './EditProfile';
import { getUser, removeUser, getEmail, removeEmail, getDateJoined, removeDateJoined, getPassword, removePassword } from "../data/repository";

// Functional Component for App
function App() {
  const [username, setUsername] = useState(getUser());
  const [email, setEmail] = useState(getEmail());
  const [DateJoined, setDateJoined] = useState(getDateJoined());
  const [password, setPassword] = useState(getPassword());

  const loginUser = (username, email, DateJoined, password) => {
    setUsername(username);
    setEmail(email);
    setDateJoined(DateJoined);
    setPassword(password);
  }

  const logoutUser = () => {
    removeUser();
    removeEmail();
    removeDateJoined();
    removePassword();
    setUsername(null);
    setEmail(null);
    setDateJoined(null);
    setPassword(null);
  }

  // Returning all the imported components for displaying on the page
  return (
    <div>
      {/* Router is used for routing to different pages */}
      <Router>
        <Header />
        <Navigation username={username} logoutUser={logoutUser} />
        <Switch>
          <Route path="/Sign-up">
            <Signup />
          </Route>
          <Route path="/Sign-in" render={props => (
            <Login {...props} loginUser={loginUser} />
          )} />
          {username !== null, email !== null &&
            <Route path="/EditProfile">
              <EditProfile username={username} email={email} DateJoined={DateJoined} logoutUser={logoutUser} />
            </Route>
          }
          {username !== null, email !== null &&
            <Route path="/MyProfile">
              <MyProfile username={username} email={email} DateJoined={DateJoined} logoutUser={logoutUser} />
            </Route>
          }
          <Route path={["/Home", "/"]}>
            <Home username={username} />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

// Export the App Function
export default App;

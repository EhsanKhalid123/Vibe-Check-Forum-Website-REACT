// Importing React classes and functions from node modules
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Importing the components
import Navigation from './Navigation';
import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import Signup from './Sign-up';
import Login from './Login';

function App() {
  // Returning all the imported components for displaying on the page
  return (
    <div>
      <Router>
        <Header />
        <Navigation />
        <Switch>
          <Route path="/Sign-up">
            <Signup />
          </Route>
          <Route path={["/Sign-in"]}>
            <Login />
          </Route>
          <Route path={["/Home", "/"]}>
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

// Export the App Function
export default App;

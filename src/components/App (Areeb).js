// Importing React classes and functions from node modules
import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

// Importing the components
import Navigation from './navigation';
import Header from './header';
import Home from './home';
import Footer from './footer';
import Signup from './sign-up';

function App() {

    const [currentPage, setCurrentPage] = useState('home');

    // Returning all the imported components for displaying on the page

    return (
        <div>
            <Router>
                <Header/>
                <Navigation navigateTo={p => setCurrentPage(p)}/>

                {(() => {
                    switch (currentPage) {
                        case "home":
                            return <Home/>
                        case "sign-up":
                            return <Signup/>
                    }
                })()}

                <Footer/>
            </Router>
        </div>
    );
}

// Export the App Function
export default App;

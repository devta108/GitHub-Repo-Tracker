import React, {useState} from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"

// React Router
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes
} from "react-router-dom"

// Toast
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

// FireBase
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import firebaseConfig from "./Config/FirebaseConfig";

// Components
import Home from "./Pages/Home";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import PageNotFound from "./Pages/PageNotFound";
import { UserContext } from "./Context/UserContext";
import Footer from "./Layout/Footer";
import Header from "./Layout/Header";

// init firebase
firebase.initializeApp(firebaseConfig);

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <ToastContainer />
      <UserContext.Provider value={{user, setUser}}>
        <Header></Header>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/signup" element={<SignUp />} />
            <Route exact path="/signin" element={<SignIn />} />
            <Route exact path="*" element={<PageNotFound />} />
          </Routes>
          <Footer></Footer>
      </UserContext.Provider>
    </Router>
  );
}

export default App;

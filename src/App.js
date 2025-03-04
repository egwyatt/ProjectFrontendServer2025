import React, { useState, useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Login from "./Login";
import Logout from "./Logout";
import Register from "./Register";
import NoPage from "./NoPage";
import CategoriesPage from "./CategoriesPage";


import './style.css';

export default function App() {
  const [uname, unameSetter] = useState(null);  // Controls the logged-in user
  const unameRef = useRef();
  const pwordRef = useRef();  

  // Logout handler
  const handleLogout = () => {
    unameSetter(null);
  };

  // Login handler
  const handleLogin = () => {
    let user = {};
    user.uname = unameRef.current.value;
    user.pword = pwordRef.current.value;

    let parameters = {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    };

    console.log('user.uname called'); 

    let url = `http://localhost:5000/users`; // Assuming a backend that accepts POST requests for login

    fetch(url, parameters)
      .then(res => res.json())
      .then(json => {
        console.log(JSON.stringify(json));
        const u = json.users;

        if (!u) {
          console.log('Invalid username doesn’t exist');
        } else if (u[0].pword !== user.pword) {
          console.log('Invalid password');
        } else {
          console.log('Valid username and password');
          unameSetter(user.uname); // Set the logged-in username
        }
      });
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home uname={uname} />} />
          
          {/* Other routes for Login, Register, etc. */}
          <Route path="login" element={<Login uname={uname} unameRef={unameRef} pwordRef={pwordRef} handleLogin={handleLogin} />} />
          <Route path="register" element={<Register />} />
          <Route path="logout" element={<Logout uname={uname} handleLogout={handleLogout} />} />
          
          {/* Categories page, if it shows a list of categories */}
          <Route path="categories" element={<CategoriesPage />} />
          
          {/* The route for viewing a specific category's questions */}
          <Route path="category/:categoryId" element={<CategoriesPage />} />
          
          {/* 404 Not Found */}
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


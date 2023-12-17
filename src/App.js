import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "./comps/Login/Login";
import Dashboard from "./comps/Dashboard/Dashboard";

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/login"
          element={ <Login /> }
        />
        <Route
          path="/dashboard"
          element={ <Dashboard /> }
        />
      </Routes>
    </Router>
  );
};

export default App;

// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Schedule from './components/Schedule';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true); // If login successful, update state
  };

  return (
    <Router>
      <div className="App">
        {isLoggedIn ? (
          <Routes>
            {/* Define routes for Dashboard and other pages */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/" element={<Dashboard />} />
            {/* You can add more routes here for other sections like Grades, Profile, etc. */}
          </Routes>
        ) : (
          <Login onLogin={handleLogin} /> // If not logged in, show login form
        )}
      </div>
    </Router>
  );
}

export default App;

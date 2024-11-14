
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './pages/Dashboard';
import Schedule from './pages/Schedule';
import Facilites from './pages/Facilites';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true); 
  };

  return (
    <Router>
      <div className="App">
        {isLoggedIn ? (
          <Routes>
           
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/Facilites" element={<Facilites />} />
            <Route path="/" element={<Dashboard />} />
           
          </Routes>
        ) : (
          <Login onLogin={handleLogin} /> 
        )}
      </div>
    </Router>
  );
}

export default App;

/* 
CODIGO ANTIGUO: 

import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Auth System</h1>
        <p>Welcome to the authentication system</p>
      </header>
    </div>
  );
}

export default App; 
*/

import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [backendStatus, setBackendStatus] = useState('Checking...');
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [formType, setFormType] = useState('login'); // 'login' or 'register'

  useEffect(() => {
    fetch('http://localhost:3002/api/health')
      .then(res => res.json())
      .then(data => setBackendStatus(data.message))
      .catch(err => setBackendStatus('Backend not connected'));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Authentication System</h1>
        <p>Backend Status: {backendStatus}</p>
        
        {/* Authentication Forms */}
        <div style={{margin: '20px'}}>
          <div style={{marginBottom: '10px'}}>
            <button 
              onClick={() => {setFormType('login'); setShowLogin(true); setShowRegister(false);}}
              style={{margin: '5px', padding: '8px 15px', backgroundColor: formType === 'login' ? '#007bff' : '#6c757d', color: 'white', border: 'none', borderRadius: '4px'}}
            >
              Login
            </button>
            <button 
              onClick={() => {setFormType('register'); setShowRegister(true); setShowLogin(false);}}
              style={{margin: '5px', padding: '8px 15px', backgroundColor: formType === 'register' ? '#007bff' : '#6c757d', color: 'white', border: 'none', borderRadius: '4px'}}
            >
              Register
            </button>
          </div>
          
          {/* Login Form */}
          {showLogin && (
            <div style={{marginTop: '10px', padding: '20px', border: '1px solid white', borderRadius: '8px'}}>
              <h3>User Login</h3>
              <input 
                type="email" 
                placeholder="Email" 
                style={{margin: '5px', padding: '8px', width: '200px', borderRadius: '4px', border: '1px solid #ccc'}} 
              />
              <br/>
              <input 
                type="password" 
                placeholder="Password" 
                style={{margin: '5px', padding: '8px', width: '200px', borderRadius: '4px', border: '1px solid #ccc'}} 
              />
              <br/>
              <button style={{margin: '5px', padding: '8px 15px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '4px'}}>
                Login
              </button>
            </div>
          )}
          
          {/* Registration Form */}
          {showRegister && (
            <div style={{marginTop: '10px', padding: '20px', border: '1px solid white', borderRadius: '8px'}}>
              <h3>User Registration</h3>
              <input 
                type="email" 
                placeholder="Email" 
                style={{margin: '5px', padding: '8px', width: '200px', borderRadius: '4px', border: '1px solid #ccc'}} 
              />
              <br/>
              <input 
                type="password" 
                placeholder="Password" 
                style={{margin: '5px', padding: '8px', width: '200px', borderRadius: '4px', border: '1px solid #ccc'}} 
              />
              <br/>
              <input 
                type="password" 
                placeholder="Confirm Password" 
                style={{margin: '5px', padding: '8px', width: '200px', borderRadius: '4px', border: '1px solid #ccc'}} 
              />
              <br/>
              <button style={{margin: '5px', padding: '8px 15px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px'}}>
                Register
              </button>
            </div>
          )}
        </div>
        
        
      </header>
    </div>
  );
}

export default App;
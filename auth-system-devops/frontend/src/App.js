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

  useEffect(() => {
    fetch('http://localhost:5000/api/health')
      .then(res => res.json())
      .then(data => setBackendStatus(data.message))
      .catch(err => setBackendStatus('Backend not connected'));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Authentication System</h1>
        <p>Backend Status: {backendStatus}</p>
        
        {/* NEW: Registration Form */}
        <div style={{margin: '20px'}}>
          <button onClick={() => setShowRegister(!showRegister)}>
            {showRegister ? 'Hide' : 'Show'} Registration Form
          </button>
          
          {showRegister && (
            <div style={{marginTop: '10px', padding: '20px', border: '1px solid white'}}>
              <h3>User Registration</h3>
              <input type="email" placeholder="Email" style={{margin: '5px', padding: '5px'}} />
              <br/>
              <input type="password" placeholder="Password" style={{margin: '5px', padding: '5px'}} />
              <br/>
              <button style={{margin: '5px', padding: '5px'}}>Register</button>
            </div>
          )}
        </div>
        
        <div>
          <h2>Features Status:</h2>
          <ul>
            <li>✅ User Registration Form</li>
            <li>🔄 User Login</li>
            <li>🔄 Password Recovery</li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
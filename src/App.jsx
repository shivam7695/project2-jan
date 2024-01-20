import React, { useState } from 'react';
import Login from './Login';
import Profile from './Profile';
import './App.css';

const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
  };

  return (
    <div>
      {!user ? <Login onLogin={handleLogin} /> : <Profile user={user} />}
    </div>
  );
};

export default App;

// src/App.js
import React, { useState } from 'react';
import UserInputForm from './components/UserInputForm';
import UserList from './components/UserList';
import './App.css';

const App = () => {
  const [users, setUsers] = useState([]);

  const handleUserSubmit = (user) => {
    setUsers([...users, user]);
  };

  return (
    <div className="App">
      <h1>Profile Card Generator</h1>
      <UserInputForm onSubmit={handleUserSubmit} />
      <UserList users={users} />
    </div>
  );
};

export default App;

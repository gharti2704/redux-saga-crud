import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import AddUser from './pages/AddUser';
import EditUser from './pages/EditUser';
import UserInfo from './pages/UserInfo';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/addUser" element={<AddUser />}></Route>
          <Route path="/editUser/:id" element={<EditUser />}></Route>
          <Route path="/userInfo/:id" element={<UserInfo />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import './App.css';
import Appbar from './components/Appbar'
import User from './components/User';
import Home from './components/Home';
import Browse from './components/Browse';
import Create from './components/Create';
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Success from './components/Success';
import Sitemap from './components/Sitemap';
import Terms from './components/Terms';
import Submit from './components/Submit';

function App() {
  
  return (
      <div className="App">
      <BrowserRouter>
        <Appbar/>
          <Routes>
            <Route path="/submit" element={<Submit />}></Route>
            <Route path="/terms" element={<Terms />}></Route>
            <Route path="/success" element={<Success />}></Route>
            <Route path="/sitemap" element={<Sitemap />}></Route>
            <Route path="/create" element={<Create />}></Route>
            <Route path="/" element={<Home />}></Route>
            <Route path="/browse" element={<Browse />}></Route>
            <Route path="/login" element={<Login />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;

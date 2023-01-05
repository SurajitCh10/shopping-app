import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Admin from './components/Admin'
import Landing from './components/Landing'
import Menu from './components/Menu'
import Submenu from './components/Submenu'
import Upload from './components/Upload'

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='login' element={<Login/>}/>
            <Route path='register' element={<Register/>}/>
            <Route path='admin/:id' element={<Admin/>}/>
            <Route path='landing' element={<Landing/>}/>
            <Route path='menu' element={<Menu/>}/>
            <Route path='submenu/:id' element={<Submenu/>}/>
            <Route path='upload' element={<Upload/>}/>
            
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

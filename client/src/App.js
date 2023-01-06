import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Landing from './components/Landing'
import Menus from './components/Menu'
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
            <Route path='landing/:id' element={<Landing/>}/>
            <Route path='' element={<Menus/>}/>
            <Route path='menu' element={<Menus/>}/>
            <Route path='submenu/:id' element={<Submenu/>}/>
            <Route path='upload' element={<Upload/>}/>
            
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

import { Routes, Route } from 'react-router-dom';
import React,{useState, useEffect} from 'react';
import './App.css';

//Auth Imports
import Register from './Pages/Register';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/register' element={<Register />}></Route>      </Routes>
    </div>
  );
}

export default App;

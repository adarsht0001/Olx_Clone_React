import React from 'react';
import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import SignupPage from './Pages/Signup';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home />} />
        <Route path='/signup' element={ <SignupPage />} />

      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;

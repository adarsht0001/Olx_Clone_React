import React from 'react';
import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import SignupPage from './Pages/Signup';
import LoginPage from './Pages/Login'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home />} />
        <Route path='/signup' element={ <SignupPage />} />            
        <Route path='/login' element={ <LoginPage />} />            
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;

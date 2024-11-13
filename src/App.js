import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './home';
import SignUp from './signup';
import SignIn from './login';
import ContactPage from './contact';
import Navbar from './Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
          <Route  path='/home'index element={<Home />} />
          <Route path='/login' element={<SignIn />} />
          <Route path='/signin' element={<SignUp />} />
          <Route path='contact' element={<ContactPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

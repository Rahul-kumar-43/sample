import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Feedback from'./ModelLab2';

function App() {
  return (
    <BrowserRouter>
   
      <Routes>
         
            <Route path='/' element ={<Feedback/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
// npx json-server --watch db.json --port 5001

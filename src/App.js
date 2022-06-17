import React, {  lazy } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Main  from './Main';
import Link  from './Link';



function App() {
  return (

  
      <BrowserRouter>      
       
        
          <Routes>
            <Route path='/l' element={<Link/>}/>
            <Route path='/' element={<Main/>}/>
          </Routes>

       
    </BrowserRouter>
  
    
  );
}

export default App;
import './App.css';
import React from 'react';
import Home from './components/pages/home/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contatos from './components/pages/contatos/index';
import Fotos from './components/pages/fotos/index';
import Comentarios from './components/pages/comentarios/index';

function App() {
 
  return ( 
    
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Contatos' element={<Contatos/>}/>
        <Route path='/Fotos' element={<Fotos/>}/>
        <Route path='/Comentarios' element={<Comentarios/>}/>
      </Routes>
     </BrowserRouter>
   
  ); 
}

export default App;
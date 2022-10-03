import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes,Route} from 'react-router-dom';


import Editar from './Danah/editar';
import Req19 from './HR/Req19';
import Req20y21 from './HR/Req20y21';
import Req14 from './HR/Req14';
import Cq from './proyecto_linares/Commonquestions';
//import Req20 from './Req20';
import Burger from "./Danah/burger"
import Register from "./Danah/register"
import Login from "./hector/login"
import Support from './proyecto_linares/support';
import Ranking from "./proyecto_linares/ranking"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/Req20y21' element={<Req20y21/>} />
        <Route path='/Req19' element={<Req19/>} />
        <Route path='/Req14' element={<Req14/>}/>
        <Route path='/Burger' element={<Burger/>}/>
        <Route path='/Editar' element={<Editar/>}/>
        <Route path='/Cq' element={<Cq/>}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Ranking' element={<Ranking/>}/>
        <Route path='/Support' element={<Support/>}/>
        
        
      </Routes>
      
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

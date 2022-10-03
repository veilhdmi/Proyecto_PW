import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import {HashRouter, Routes,Route} from 'react-router-dom';

//import Probando from './burger/Probando.jsx';
//import EditarPerfil from './edit/EditarPerfil';
import Req19 from './HR/Req19';
import Req20y21 from './HR/Req20y21';
import Req14 from './HR/Req14';
//import Req20 from './Req20';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path='https://veilhdmi.github.io/proyecto_pw' element={<Req20y21/>} />
        <Route path='/Req19' element={<Req19/>} />
        <Route path='/Req14' element={<Req14/>}/>
      </Routes>
      
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

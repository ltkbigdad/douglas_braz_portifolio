import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import { BrowserRouter } from "react-router-dom"
import Global from './Styles/Global';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Global/>
      <App />    
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


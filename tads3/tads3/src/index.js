import React from 'react';
import { useHistory } from 'react-router'
import ReactDOM from 'react-dom';
import './index.css';
import Sidebar from "./Component/Vertical"
import Grid from "./Component/Grid.jsx"
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Admin from "./Component/admin"
import createHistory from 'history/createBrowserHistory'
import * as serviceWorker from './serviceWorker';
import Faculty from './Component/faculty';
import Student from './Component/student';

ReactDOM.render(
  <React.StrictMode>

  
    {/* <Student></Student>  */}
    {/* <Faculty></Faculty> */}
    <Admin></Admin>
    
    
  </React.StrictMode>,
  document.getElementById('root')
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(1000);
serviceWorker.register();

import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// Render our custom HTML element into the place of the 'root' element
ReactDOM.render( <BrowserRouter><App /></BrowserRouter> , document.getElementById('root') );



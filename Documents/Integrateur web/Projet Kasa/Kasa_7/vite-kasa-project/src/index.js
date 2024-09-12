import React from "react";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowSerRouter} from "react-router-dom"

ReactDOM.render(
    <BrowSerRouter>
      <App />
    </BrowSerRouter>,
    document.getElementById('root')
);


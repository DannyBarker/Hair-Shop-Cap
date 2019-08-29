import React from 'react';
import ReactDOM from 'react-dom';
import HairShop from './components/HairShop'
import {BrowserRouter as Router} from "react-router-dom"
import './index.css';

ReactDOM.render(<Router><HairShop /></Router>, document.getElementById('root'));
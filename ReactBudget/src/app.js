import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import PFRouter from './playground/portfolio/routers/pfRouter';

ReactDOM.render(<PFRouter/>, document.getElementById('app'));


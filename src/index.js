import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import App from './Component/App';
import {DATA} from './config';

ReactDOM.render(<App data = {DATA} />, document.querySelector('#root'));
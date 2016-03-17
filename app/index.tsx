/// <reference path='../typings/tsd.d.ts' />

require('!style!css!./main.css');

import React = require('react');
import ReactDOM = require('react-dom');

import App = require('./components/App.tsx');

ReactDOM.render(<App />, document.getElementById('app'));


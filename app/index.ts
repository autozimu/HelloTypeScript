import greet = require('./component');
require('!style!css!./main.css');

const app = document.createElement('div');
document.body.appendChild(app);
app.appendChild(greet('Yo'));

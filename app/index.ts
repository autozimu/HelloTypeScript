import greet = require('./components/component');

const app = document.createElement('div');
document.body.appendChild(app);
app.appendChild(greet('Yo'));

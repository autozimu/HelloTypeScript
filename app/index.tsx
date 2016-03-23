import './main.css';
import * as React from 'react'
import * as ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {AppReducer} from './reducers';
import {AppContainer} from './containers';

const store = (window['devToolsExtension'] ? window['devToolsExtension']()(createStore) : createStore)(AppReducer);


ReactDOM.render(
    <Provider store={store}>
        <AppContainer />
    </Provider>,
    document.getElementById('app'));

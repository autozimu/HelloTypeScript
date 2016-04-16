import "./main.css";
import * as React from "react";
import * as ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {AppContainer} from "./containers";
import {store} from "./store";


ReactDOM.render(
    <Provider store={store}>
        <AppContainer />
    </Provider>,
    document.getElementById("app"));

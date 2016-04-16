import {createStore, compose, applyMiddleware} from "redux";
import {AppReducer} from "./reducers";

const storeName = "kanban";

const localStorageMiddleware = ({getState}) => {
    return (next) => (action) => {
        const result = next(action);
        localStorage.setItem(storeName, JSON.stringify(getState()));
        return result;
    };
};

export const store = compose(
    applyMiddleware(
        localStorageMiddleware
    )
)(window["devToolsExtension"] ? window["devToolsExtension"]()(createStore) : createStore)(
    AppReducer,
    JSON.parse(localStorage.getItem(storeName)) || {}
);
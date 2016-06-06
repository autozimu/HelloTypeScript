import {createStore, compose, applyMiddleware} from "redux";
import {appReducer} from "./reducers/appReducer";

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
    ),
    window["devToolsExtension"] ? window["devToolsExtension"]() : f => f
)(createStore)(
    appReducer,
    JSON.parse(localStorage.getItem(storeName)) || {}
);

export const dispatch = store.dispatch;
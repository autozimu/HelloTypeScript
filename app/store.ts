import { createStore, applyMiddleware, compose } from "redux";
import { appReducer } from "./reducers/appReducer";

const storeName = "kanban";

const localStorageMiddleware = ({getState}) => {
    return (next) => (action) => {
        const result = next(action);
        localStorage.setItem(storeName, JSON.stringify(getState()));
        return result;
    };
};

const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose;

export const store = createStore(
    appReducer,
    JSON.parse(localStorage.getItem(storeName) !) || {},
    composeEnhancers(
        applyMiddleware(
            localStorageMiddleware
        )
    )
);

export const dispatch = store.dispatch;

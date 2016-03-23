import {connect} from 'react-redux';
import {App} from "./components/App";

const getNotes = (state) => {
    return {
        notes: state.notes
    }
};

export const AppContainer = connect(
    getNotes
)(App);

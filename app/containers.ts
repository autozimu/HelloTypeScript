import {connect} from 'react-redux';
import {App} from "./components/App";

function mapStateToProps(state){
    return {
        notes: state.notes
    };
}

export const AppContainer = connect(
    mapStateToProps
)(App);
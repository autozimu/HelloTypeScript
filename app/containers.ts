import {connect} from 'react-redux';
import {App} from "./components/App";
import {updateNote, deleteNote, createNote} from "./actions";

function mapStateToProps(state) {
    return {
        notes: state.notes
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onCreate: () => dispatch(createNote()),
        onUpdate: (id, task) => dispatch(updateNote(id, task)),
        onDelete: (id) => dispatch(deleteNote(id))
    }
}

export const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
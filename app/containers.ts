import {Dispatch} from "redux";
import {connect} from "react-redux";
import {App} from "./components/App";
import {updateNote, deleteNote, createNote} from "./actions/noteActions";
import {IState} from "./models/IState";

function mapStateToProps(state: IState) {
    return {
        notes: state.notes
    };
}

function mapDispatchToProps(dispatch: Dispatch) {
    return {
        onCreate: () => dispatch(createNote()),
        onUpdate: (id, task) => dispatch(updateNote(id, task)),
        onDelete: (id) => dispatch(deleteNote(id))
    };
}

export const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
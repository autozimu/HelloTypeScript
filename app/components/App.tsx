import * as React from 'react';
import {Dispatch} from 'redux';
import { Notes } from './Notes'
import { INote } from '../models/INote'
import {addNote, deleteNote, updateNote} from "../actions";

interface IAppProps {
    notes: Array<INote>;
    dispatch: Dispatch;
}

interface IAppStates {
}

export class App extends React.Component<IAppProps, IAppStates> {
    constructor(props) {
        super(props);
    }

    render() {
        const { notes } = this.props;

        return (
            <div>
                <button className="add-note"
                        onClick={() => this.props.dispatch(addNote())}>
                    +
                </button>

                <Notes notes={notes}
                       onUpdate={(id, task) => this.props.dispatch(updateNote(id, task))}
                       onDelete={(id) => this.props.dispatch(deleteNote(id))}
                />
            </div>
        );
    }
}

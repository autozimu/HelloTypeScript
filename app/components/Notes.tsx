import * as React from "react";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {INote} from "../models/INote";
import {Editable} from "./Editable";
import {updateNote, deleteNote} from "../actions/noteActions";

interface INotesProps {
    notes: Array<INote>;
    dispatch?: Dispatch;
}

class NotesComponent extends React.Component<INotesProps, {}> {
    constructor(props: INotesProps) {
        super(props);
    }

    render() {
        const dispatch = this.props.dispatch!;
        
        return (
            <ul className="notes">{this.props.notes.map(note =>
                <li className="note" key={note.id}>
                    <Editable id={note.id}
                              value={note.task}
                              onUpdate={(id, task) => dispatch(updateNote(id, task))}
                              onDelete={(id) => dispatch(deleteNote(id))}
                    />
                </li>
            )}</ul>
        );
    }
}

export const Notes = connect()(NotesComponent);

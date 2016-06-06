import * as React from 'react';
import {Dispatch} from "redux";
import {connect} from "react-redux";

import {Editable} from './Editable';
import {INote} from "../models/INote";
import {deleteNote, updateNote} from "../actions/noteActions";

interface Props {
    note: INote;
    dispatch?: Dispatch;
}

class NoteComponent extends React.Component<Props, {}> {
    constructor(props: Props) {
        super(props);
    }
    
    render() {
        const {note} = this.props;
        const dispatch = this.props.dispatch!;
        
        return (
            <div className="note">
                <Editable value={note.task}
                          onUpdate={(task) => dispatch(updateNote(note.id, task))}
                />
                <button className="delete"
                        onClick={() => dispatch(deleteNote(note.id))}>
                    x
                </button>
            </div>
        );
    }
}

export const Note = connect()(NoteComponent);

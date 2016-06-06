import * as React from 'react';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';

import {Note} from './Note';
import {INote} from '../models/INote';
import {updateNote, deleteNote} from '../actions/noteActions';
import {Editable} from './Editable';
import {move} from "../actions/laneActions";

interface Props {
    notes: INote[];
    dispatch?: Dispatch;
}

class NotesComponent extends React.Component<Props, {}> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        const dispatch = this.props.dispatch!;
        
        return (
            <ul className="notes">{this.props.notes.map(note =>
                <li key={note.id}>
                    <Note id={note.id}
                          onMove={(sourceId, targetId) => dispatch(move(sourceId, targetId))}>
                        <Editable value={note.task}
                                  onUpdate={(task) => dispatch(updateNote(note.id, task))}
                        />
                        <button className="delete"
                                onClick={() => dispatch(deleteNote(note.id))}>
                            x
                        </button>
                    </Note>
                </li>
            )}</ul>
        );
    }
}

export const Notes = connect()(NotesComponent);

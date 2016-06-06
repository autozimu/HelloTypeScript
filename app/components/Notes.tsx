import * as React from 'react';

import {dispatch} from '../store';
import {Note} from './Note';
import {INote} from '../models/INote';
import {updateNote, deleteNote} from '../actions/noteActions';
import {Editable} from './Editable';
import {move} from "../actions/laneActions";

interface Props {
    notes: INote[];
}

export class Notes extends React.Component<Props, {}> {
    constructor(props: Props) {
        super(props);
    }

    render() {
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

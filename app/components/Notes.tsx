import * as React from "react";
import {Dispatch} from "redux";
import {connect} from "react-redux";

import {Note} from './Note';
import {INote} from "../models/INote";

interface Props {
    notes: INote[];
    dispatch?: Dispatch;
}

class NotesComponent extends React.Component<Props, {}> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        
        return (
            <ul className="notes">{this.props.notes.map(note =>
                <li key={note.id}>
                    <Note note={note} />
                </li>
            )}</ul>
        );
    }
}

export const Notes = connect()(NotesComponent);

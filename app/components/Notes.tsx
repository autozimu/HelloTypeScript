import * as React from 'react';
import { Note } from './Note';
import { INote } from "../models/INote";

interface INotesProps {
    notes: Array<INote>
}

export class Notes extends React.Component<INotesProps, INoteStates> {
    constructor(props: INotesProps) {
        super(props);
    }

    render() {
        return (
            <ul>{this.props.notes.map(note =>
                <li key={note.id}>
                    <Note task={note.task} />
                </li>
            )}</ul>
        );
    }
}

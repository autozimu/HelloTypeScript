import * as React from 'react';
import { Note } from './Note';
import { INote } from "../models/INote";

interface INotesProps {
    notes: Array<INote>;
    onEdit(id: string, task: string): void;
}

export class Notes extends React.Component<INotesProps, {}> {
    constructor(props: INotesProps) {
        super(props);
    }

    render() {
        return (
            <ul>{this.props.notes.map(note =>
                <li key={note.id}>
                    <Note
                        task={note.task}
                        onEdit={this.props.onEdit.bind(null, note.id)}
                    />
                </li>
            )}</ul>
        );
    }
}

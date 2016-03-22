import * as React from 'react';
import { Note } from './Note';
import { INote } from "../models/INote";

interface INotesProps {
    notes: Array<INote>;
    onEdit(id: string, task: string): void;
    onDelete(id: string, e: Event): void;
}

export class Notes extends React.Component<INotesProps, {}> {
    constructor(props: INotesProps) {
        super(props);
    }

    render() {
        return (
            <ul className="notes">{this.props.notes.map(note =>
                <li className="note" key={note.id}>
                    <Note
                        task={note.task}
                        onEdit={this.props.onEdit.bind(null, note.id)}
                        onDelete={this.props.onDelete.bind(null, note.id)}
                    />
                </li>
            )}</ul>
        );
    }
}

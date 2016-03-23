import * as React from 'react';
import { Note } from './Note';
import { INote } from "../models/INote";

interface INotesProps {
    notes: Array<INote>;
    onUpdate(id: string, task: string): void;
    onDelete(id: string): void;
}

export class Notes extends React.Component<INotesProps, {}> {
    constructor(props: INotesProps) {
        super(props);
    }

    render() {
        return (
            <ul className="notes">{this.props.notes.map(note =>
                <li className="note" key={note.id}>
                    <Note id={note.id}
                          task={note.task}
                          onUpdate={this.props.onUpdate}
                          onDelete={this.props.onDelete}
                    />
                </li>
            )}</ul>
        );
    }
}

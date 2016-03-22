import * as React from 'react';
import * as uuid from 'node-uuid'
import { Notes } from './Notes'
import { INote } from '../models/INote'

interface IAppStates {
    notes: Array<INote>;
}

export class App extends React.Component<{}, IAppStates> {
    constructor(props) {
        super(props);

        this.state = {
            notes: [
            {
                id: uuid.v4(),
                task: 'Learn Webpack'
            },
            {
                id: uuid.v4(),
                task: 'Learn React'
            },
            {
                id: uuid.v4(),
                task: 'Do laundry'
            }
        ]
        }
    }

    render() {
        const { notes } = this.state;

        return (
            <div>
                <button
                    className="add-note"
                    onClick={this.addNote}>
                    +
                </button>

                <Notes
                    notes={notes}
                    onEdit={this.editNote}
                    onDelete={this.deleteNote}
                />
            </div>
        );
    }

    addNote = () => {
        this.setState({
            notes: [
                ...this.state.notes,
                {
                    id: uuid.v4(),
                    task: 'New task'
                }
            ]
        });
    };

    editNote = (id, task) => {
        if (!task.trim()) {
            return;
        }

        const notes = this.state.notes.map(note => {
           if (note.id === id && task) {
               note.task = task;
           }

            return note
        });

        this.setState({notes});
    };

    deleteNote = (id, e) => {
        e.stopPropagation();

        this.setState({
            notes: this.state.notes.filter(note => note.id !== id)
        });
    };
}

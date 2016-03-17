import React = require('react');
import Note = require('./Note.tsx');
import uuid = require('node-uuid');

interface INote {
    id: string,
    task: string
}

interface IAppStates {
    notes: Array<INote>
}

class App extends React.Component<{}, IAppStates> {
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
        const notes = this.state.notes;

        return (
            <div>
                <button onClick={this.addNote}>+</button>

                <ul>{notes.map(note =>
                <li key={note.id}>{note.task}</li>
                    )}</ul>
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
}

export = App;

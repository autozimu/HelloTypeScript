import * as React from 'react';
import * as uuid from 'node-uuid'
import { Notes } from './Notes'
import { INote } from '../models/INote'

interface IAppStates {
    notes: Array<INote>
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
                <button onClick={this.addNote}>+</button>

                <Notes notes={notes} />
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

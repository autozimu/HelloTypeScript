import * as React from 'react';
import { Notes } from './Notes'
import { INote } from '../models/INote'

interface IAppProps {
    notes: Array<INote>;
    onCreate(): void;
    onUpdate(id: string, task: string): void;
    onDelete(id: string): void;
}

interface IAppStates {
}

export class App extends React.Component<IAppProps, IAppStates> {
    constructor(props) {
        super(props);
    }

    render() {
        const { notes } = this.props;

        return (
            <div>
                <button className="add-note"
                        onClick={this.props.onCreate}>
                    +
                </button>

                <Notes notes={notes}
                       onUpdate={this.props.onUpdate}
                       onDelete={this.props.onDelete}
                />
            </div>
        );
    }
}

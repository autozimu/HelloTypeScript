import * as React from 'react';

interface INoteProps {
    id: string;
    task: string;
    onUpdate(id: string, task: string): void;
    onDelete(id: string): void;
}

interface INoteStates {
    editing: boolean;
}

export class Note extends React.Component<INoteProps, INoteStates> {
    constructor(props: INoteProps) {
        super(props);

        this.state = {
          editing: false
        };
    }

    render() {
        if (this.state.editing) {
            return this.renderEdit();
        } else {
            return this.renderNote();
        }
    }

    renderEdit() {
        return (
            <input type="text"
                   ref={(e) => e ? e.selectionStart = this.props.task.length : null}
                   autoFocus={true}
                   defaultValue={this.props.task}
                   onKeyPress={this.checkEnter}
                   onBlur={this.finishEdit}>
            </input>
        );
    }

    renderNote() {
        return (
            <div onClick={this.edit}>
                <span className="task">{this.props.task}</span>
                {this.renderDelete()}
            </div>
        );
    }

    renderDelete = () => {
        return (
            <button className="delete-note"
                    onClick={() => this.props.onDelete(this.props.id)}>
                x
            </button>
        );
    };

    edit = () => {
        this.setState({
           editing: true
        });
    };

    checkEnter = (e) => {
        if (e.key === 'Enter') {
            this.finishEdit(e);
        }
    };

    finishEdit = (e) => {
        const value = e.target.value;

        this.props.onUpdate(this.props.id, value);

        this.setState({
            editing: false
        });
    };
}

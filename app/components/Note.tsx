import * as React from 'react';

interface INoteProps {
    task: string;
    onEdit(value: string): void;
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
                {this.props.task}
            </div>
        );
    }

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

        if (this.props.onEdit) {
            this.props.onEdit(value);
        }

        this.setState({
            editing: false
        });
    };
}

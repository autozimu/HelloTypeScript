import * as React from "react";

interface Props {
    value: string;
    onUpdate(value: string);
    onDelete();
}

interface States {
    editing: boolean;
}

export class Editable extends React.Component<Props, States> {
    constructor(props: Props) {
        super(props);

        this.state = {
            editing: false
        };
    }

    click() {
        this.setState({
            editing: true
        });
    }

    checkEnter(e: React.KeyboardEvent) {
        if (e.key === "Enter") {
            this.finishEdit(e);
        }
    }

    finishEdit(e: React.SyntheticEvent) {
        this.setState({
            editing: false
        });

        const value = (e.target as HTMLInputElement).value;

        if (!value) {
            return;
        }

        this.props.onUpdate(value);
    }

    renderEdit() {
        return (
            <input type="text"
                   autoFocus={true}
                   defaultValue={this.props.value}
                   onKeyPress={(e) => this.checkEnter(e)}
                   onBlur={(e) => this.finishEdit(e)}>
            </input>
        );
    }

    renderValue() {
        return (
            <div onClick={() => this.click()}>
                <span className="value">{this.props.value}</span>
                {this.props.onDelete ? this.renderDelete() : null}
            </div>
        );
    }

    renderDelete() {
        return (
            <button className="delete"
                    onClick={() => this.props.onDelete()}>
                x
            </button>
        );
    }

    render() {
        if (this.state.editing) {
            return this.renderEdit();
        } else {
            return this.renderValue();
        }
    }
}

import * as React from "react";

interface Props {
    value: string;
    onUpdate(value: string);
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

    checkEnter(e: React.KeyboardEvent<any>) {
        if (e.key === "Enter") {
            this.finishEdit(e);
        }
    }

    finishEdit(e: React.SyntheticEvent<any>) {
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
            <input className="editable"
                   type="text"
                   autoFocus={true}
                   defaultValue={this.props.value}
                   onKeyPress={(e) => this.checkEnter(e)}
                   onBlur={(e) => this.finishEdit(e)}>
            </input>
        );
    }

    renderValue() {
        return (
            <span className="value"
                  onClick={() => this.click()}>
                {this.props.value}
            </span>
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

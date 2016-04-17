import * as React from "react";

interface IEditableProps {
    id: string;
    value: string;
    onUpdate: (id: string, value: string) => void;
    onDelete?: (id: string) => void;
}

interface IEditableStates {
    editing: boolean;
}

export class Editable extends React.Component<IEditableProps, IEditableStates> {
    constructor(props: IEditableProps) {
        super(props);
        
        this.state = {
            editing: false
        };
    }

    renderEdit() {
        return (
            <input type="text"
                   ref={(e) => e ? e.selectionStart = this.props.value.length : null}
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

    renderDelete = () => {
        return (
            <button className="delete"
                    onClick={() => this.props.onDelete(this.props.id)}>
                x
            </button>
        );
    };
    
    render() {
        if (this.state.editing) {
            return this.renderEdit();
        } else {
            return this.renderValue();
        }
    }
    
    click() {
        this.setState({
            editing: true
        });
    }

    checkEnter(e) {
        if (e.key === "Enter") {
            this.finishEdit(e);
        }
    }

    finishEdit(e) {
        this.setState({
            editing: false
        });
        
        const value = e.target.value;

        if (!value) {
            return;
        }

        this.props.onUpdate(this.props.id, value);
    }
}

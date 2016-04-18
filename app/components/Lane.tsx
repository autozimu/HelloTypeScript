import * as uuid from "node-uuid";
import * as React from "react";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {Notes} from "./Notes";
import {Editable} from "./Editable";
import {INote} from "../models/INote";
import {createNote} from "../actions/noteActions";
import {attachToLane, updateLane, deleteLane} from "../actions/laneActions";

interface ILaneProps {
    id: string;
    name: string;
    notes: Array<INote>;
    dispatch?: Dispatch;
}

@connect()
export class Lane extends React.Component<ILaneProps, {}> {
    constructor(props: ILaneProps) {
        super(props);
    }

    createNote() {
        const note = {
            id: uuid.v4(),
            task: "New task"
        };
        this.props.dispatch(createNote(note.id, note.task));
        this.props.dispatch(attachToLane(this.props.id, note.id));
    }

    render() {
        return (
            <div className="lane">
                <div className="lane-header">
                    <div className="lane-add-note">
                        <button onClick={() => this.createNote()}>
                            +
                        </button>
                    </div>
                    <div className="lane-name">
                        <Editable id={this.props.id}
                                  value={this.props.name}
                                  onUpdate={(id, name) => this.props.dispatch(updateLane(id, name))}
                        />
                    </div>
                    <div className="lane-delete">
                        <button onClick={() => this.props.dispatch(deleteLane(this.props.id))}>
                            x
                        </button>
                    </div>
                </div>
                <Notes notes={this.props.notes} />
            </div>
        );
    }
}
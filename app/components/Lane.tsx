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
    notes: INote[];
    dispatch?: Dispatch;
}

class LaneComponent extends React.Component<ILaneProps, {}> {
    constructor(props: ILaneProps) {
        super(props);
    }

    createNote() {
        const dispatch = this.props.dispatch!;
        
        const note = {
            id: uuid.v4(),
            task: "New task"
        };
        
        dispatch(createNote(note.id, note.task));
        dispatch(attachToLane(this.props.id, note.id));
    }

    render() {
        const dispatch = this.props.dispatch!;
        
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
                                  onUpdate={(id, name) => dispatch(updateLane(id, name))}
                                  onDelete={(id) => dispatch(deleteLane(this.props.id))}
                        />
                    </div>
                    <div className="lane-delete">
                        <button onClick={() => dispatch(deleteLane(this.props.id))}>
                            x
                        </button>
                    </div>
                </div>
                <Notes notes={this.props.notes} />
            </div>
        );
    }
}

export const Lane = connect()(LaneComponent);

import * as uuid from "node-uuid";
import * as React from "react";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {Notes} from "./Notes";
import {Editable} from "./Editable";
import {createNote} from "../actions/noteActions";
import {attachToLane, updateLane, deleteLane} from "../actions/laneActions";
import {ILane} from "../models/ILane";
import {IState} from "../models/IState";
import {INote} from "../models/INote";

interface Props {
    lane: ILane;
    notes?: INote[];
    dispatch?: Dispatch;
}

class LaneComponent extends React.Component<Props, {}> {
    constructor(props: Props) {
        super(props);
    }

    createNote() {
        const dispatch = this.props.dispatch!;
        
        const note = {
            id: uuid.v4(),
            task: "New task"
        };
        
        dispatch(createNote(note.id, note.task));
        dispatch(attachToLane(this.props.lane.id, note.id));
    }

    render() {
        const {id, name} = this.props.lane;
        const dispatch = this.props.dispatch!;
        const notes = this.props.notes!;
        
        return (
            <div className="lane">
                <div className="lane-header">
                    <div className="lane-add-note">
                        <button onClick={() => this.createNote()}>
                            +
                        </button>
                    </div>
                    <div className="lane-name">
                        <Editable value={name}
                                  onUpdate={(name) => dispatch(updateLane(id, name))}
                                  onDelete={() => dispatch(deleteLane(id))}
                        />
                    </div>
                    <div className="lane-delete">
                        <button onClick={() => dispatch(deleteLane(id))}>
                            x
                        </button>
                    </div>
                </div>
                <Notes notes={notes} />
            </div>
        );
    }
}

export const Lane = connect(
    function (state: IState, ownProps: Props): Props {
        return {
            lane: ownProps.lane,
            notes: state.notes.filter(note => ownProps.lane.noteIds.indexOf(note.id) > -1)
        }
    }
)(LaneComponent);

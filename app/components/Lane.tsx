import * as uuid from "node-uuid";
import * as React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {DropTarget, ConnectDropTarget} from 'react-dnd';

import {Notes} from "./Notes";
import {Editable} from "./Editable";
import {createNote} from "../actions/noteActions";
import {attachToLane, updateLane, deleteLane} from "../actions/laneActions";
import {ILane} from "../models/ILane";
import {IState} from "../models/IState";
import {INote} from "../models/INote";
import {ItemTypes} from '../constants/ItemTypes';
import {dispatch} from '../store';

interface Props {
    lane: ILane;
    notes?: INote[];
    connectDropTarget: ConnectDropTarget;
}

class LaneComponent extends React.Component<Props, {}> {
    constructor(props: Props) {
        super(props);
    }

    createNote() {
        const note = {
            id: uuid.v4(),
            task: "New task"
        };
        
        dispatch(createNote(note.id, note.task));
        dispatch(attachToLane(this.props.lane.id, note.id));
    }

    render() {
        const {lane, connectDropTarget} = this.props;
        const notes = this.props.notes!;
        
        return connectDropTarget(
            <div className="lane">
                <div className="lane-header">
                    <div className="lane-add-note">
                        <button onClick={() => this.createNote()}>
                            +
                        </button>
                    </div>
                    <div className="lane-name">
                        <Editable value={lane.name}
                                  onUpdate={(name) => dispatch(updateLane(lane.id, name))}
                        />
                    </div>
                    <div className="lane-delete">
                        <button onClick={() => dispatch(deleteLane(lane.id))}>
                            x
                        </button>
                    </div>
                </div>
                <Notes notes={notes} />
            </div>
        );
    }
}

const noteTarget = {
    hover(targetProps: Props, monitor) {
        const sourceId = monitor.getItem().id;

        if (targetProps.lane.noteIds.indexOf(sourceId) <= -1) {
            const laneId = targetProps.lane.id;
            
            console.log(targetProps);
            dispatch(attachToLane(laneId, sourceId));
        }
    }
};

export const Lane = compose(
    DropTarget(ItemTypes.NOTE, noteTarget, connect => ({
        connectDropTarget: connect.dropTarget()
    })),
    connect(
        function (state: IState, ownProps: Props) {
            return {
                notes: state.notes.filter(note => ownProps.lane.noteIds.indexOf(note.id) > -1)
            }
        }
    )
)(LaneComponent);

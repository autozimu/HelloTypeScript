import * as update from 'react-addons-update';

import { ILane } from "../models/ILane";
import { IAction } from "./../actions/IAction";
import {
    CREATE_LANE, ICreateLaneAction,
    UPDATE_LANE, IUpdateLaneAction,
    DELETE_LANE, IDeleteLaneAction,
    ATTACH_TO_LANE, IAttachToLaneAction,
    DETACH_FROM_LANE, IDetachFromLaneAction,
    MOVE, IMoveAction
} from "../actions/laneActions";

const handlers = {};
export function laneReducer(state: Array<ILane> = [], action: IAction) {
    if (handlers[action.type]) {
        return handlers[action.type](state, action);
    } else {
        console.warn("No action handler found!");
        return state;
    }
}

handlers[CREATE_LANE] = function (lanes: ILane[], action: ICreateLaneAction): ILane[] {
    const {lane} = action.payload;

    return lanes.concat(lane);
};

handlers[UPDATE_LANE] = function (lanes: ILane[], action: IUpdateLaneAction): ILane[] {
    const {id, name} = action.payload;

    return lanes.map(lane => {
        if (lane.id === id) {
            lane.name = name;
        }
        return lane;
    });
};

handlers[DELETE_LANE] = function (lanes: ILane[], action: IDeleteLaneAction): ILane[] {
    const {id} = action.payload;

    return lanes.filter(lane => lane.id !== id);
};

handlers[ATTACH_TO_LANE] = function (lanes: ILane[], action: IAttachToLaneAction): ILane[] {
    const {laneId, noteId} = action.payload;

    return lanes.map(lane => {
        if (lane.noteIds.indexOf(noteId) > -1) {
            lane.noteIds = lane.noteIds.filter(id => id !== noteId);
        }
        if (lane.id === laneId) {
            lane.noteIds = lane.noteIds.concat(noteId);
        }
        return lane;
    });
};

handlers[DETACH_FROM_LANE] = function (lanes: ILane[], action: IDetachFromLaneAction): ILane[] {
    const {laneId, noteId} = action.payload;

    return lanes.map(lane => {
        if (lane.id === laneId) {
            lane.noteIds = lane.noteIds.filter(id => id != noteId);
        }
        return lane;
    });
};

handlers[MOVE] = function (lanes: ILane[], action: IMoveAction): ILane[] {
    const {sourceId, targetId} = action.payload;
    const sourceLane = lanes.filter(lane => lane.noteIds.indexOf(sourceId) > -1)[0];
    const targetLane = lanes.filter(lane => lane.noteIds.indexOf(targetId) > -1)[0];
    const sourceNoteIndex = sourceLane.noteIds.indexOf(sourceId);
    const targetNoteIndex = targetLane.noteIds.indexOf(targetId);

    if (sourceLane === targetLane) {
        sourceLane.noteIds = update(sourceLane.noteIds, {
            $splice: [
                [sourceNoteIndex, 1],
                [targetNoteIndex, 0, sourceId]
            ]
        });
    } else {
        sourceLane.noteIds.splice(sourceNoteIndex, 1);
        targetLane.noteIds.splice(targetNoteIndex, 0, sourceId);
    }

    return lanes;
};

import * as uuid from "node-uuid";
import {IAction} from "./IAction";
import {ILane} from "../models/ILane";


export const CREATE_LANE = "create lane";
export interface ICreateLaneAction extends IAction {
    payload: {
        lane: ILane;
    }
}
export function createLane(): ICreateLaneAction {
    return {
        type: CREATE_LANE,
        payload: {
            lane: {
                id: uuid.v4(),
                name: "New lane",
                noteIds: []
            }
        }
    };
}


export const UPDATE_LANE = "update lane";
export interface IUpdateLaneAction extends IAction {
    payload: {
        id: string;
        name: string;
    }
}
export function updateLane(id: string, name: string): IUpdateLaneAction {
    return {
        type: UPDATE_LANE,
        payload: { id, name }
    };
}


export const DELETE_LANE = "delete lane";
export interface IDeleteLaneAction extends IAction {
    payload: {
        id: string;
    }
}
export function deleteLane(id: string): IDeleteLaneAction {
    return {
        type: DELETE_LANE,
        payload: {id}
    };
}

export const ATTACH_TO_LANE = "attach to lane";
export interface IAttachToLaneAction extends IAction {
    payload: {
        laneId: string;
        noteId: string;
    }
}
export function attachToLane(laneId: string, noteId: string): IAttachToLaneAction {
    return {
        type: ATTACH_TO_LANE,
        payload: {
            laneId,
            noteId
        }
    };
}


export const DETACH_FROM_LANE = "detach from lane";
export interface IDetachFromLaneAction extends IAction {
    payload: {
        laneId: string;
        noteId: string;
    }
}
export function detachFromLane(laneId: string, noteId: string): IDetachFromLaneAction {
    return {
        type: DETACH_FROM_LANE,
        payload: {
            laneId,
            noteId
        }
    };
}

export const MOVE = 'MOVE';
export interface IMoveAction extends IAction {
    payload: {
        sourceId: string;
        targetId: string;
    }
}
export function move(sourceId, targetId): IMoveAction {
    return {
        type: MOVE,
        payload: {
            sourceId,
            targetId
        }
    };
}

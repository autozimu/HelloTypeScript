import {handleActions} from "redux-actions";
import {ILane} from "../models/ILane";
import {
    CREATE_LANE, ICreateLaneAction,
    UPDATE_LANE, IUpdateLaneAction,
    DELETE_LANE, IDeleteLaneAction,
    ATTACH_TO_LANE, IAttachToLaneAction,
    DETACH_FROM_LANE, IDetachFromLaneAction
} from "../actions/laneActions";

export const laneReducer = handleActions({
    [CREATE_LANE]: (lanes: Array<ILane>, action: ICreateLaneAction) => (
        lanes.concat(action.payload.lane)
    ),

    [UPDATE_LANE]: (lanes: Array<ILane>, action: IUpdateLaneAction) => (
        lanes.map(lane => {
            if (lane.id === action.payload.id) {
                lane.name = action.payload.name;
            }
            return lane;
        })
    ),

    [DELETE_LANE]: (lanes: Array<ILane>, action: IDeleteLaneAction) => (
        lanes.filter(lane => lane.id !== action.payload.id)
    ),

    [ATTACH_TO_LANE]: (lanes: Array<ILane>, action: IAttachToLaneAction) => (
        lanes.map(lane => {
            if (lane.id === action.payload.laneId) {
                if (lane.noteIds.indexOf(action.payload.noteId) > -1) {
                    console.warn("Already attached note to lane", lanes);
                } else {
                    lane.noteIds.push(action.payload.noteId);
                }
            }
            return lane;
        })
    ),

    [DETACH_FROM_LANE]: (lanes: Array<ILane>, action: IDetachFromLaneAction) => (
        lanes.map(lane => {
            if (lane.id === action.payload.laneId) {
                lane.noteIds = lane.noteIds.filter(id => id != action.payload.noteId);
            }
            return lane;
        })
    ),
}, []);


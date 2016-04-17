import {ILane} from "./ILane";
import {INote} from "./INote";

export interface IState {
    lanes: Array<ILane>;
    notes: Array<INote>;
}
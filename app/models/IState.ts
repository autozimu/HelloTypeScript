import {ILane} from "./ILane";
import {INote} from "./INote";

export interface IState {
    lanes: ILane[];
    notes: INote[];
}
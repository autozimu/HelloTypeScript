import {IAction} from "./IAction";

export const CREATE_NOTE = "create note";
export interface ICreateNoteAction extends IAction {
    payload: {
        id: string;
        task: string;
    }
}
export function createNote(id: string, task: string): ICreateNoteAction {
    return {
        type: CREATE_NOTE,
        payload: {id, task}
    };
}

export const UPDATE_NOTE = "update note";
export interface IUpdateNoteAction extends IAction {
    payload: {
        id: string;
        task: string;
    }
}
export function updateNote(id: string, task: string): IUpdateNoteAction {
    return {
        type: UPDATE_NOTE,
        payload: {id, task}
    };
}

export const DELETE_NOTE = "delete note";
export interface IDeleteNoteAction extends IAction {
    payload: {
        id: string;
    }
}
export function deleteNote(id: string): IDeleteNoteAction {
    return {
        type: DELETE_NOTE,
        payload: {id}
    };
}
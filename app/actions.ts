/*
 * action types
 */

export const ADD_NOTE= 'ADD_NOTE';
export const UPDATE_NOTE = 'UPDATE_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';

/*
 * action creators
 */

export interface IAction {
    type: string;
    id: string;
    task: string;
}

export function addNote() {
    return {
        type: ADD_NOTE
    };
}

export function updateNote(id: string, task: string) {
    return {
        type: UPDATE_NOTE,
        id,
        task
    }
}

export function deleteNote(id: string) {
    return {
        type: DELETE_NOTE,
        id
    }
}
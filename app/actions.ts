export interface IAction {
    type: string;
    id: string;
    task: string;
}

export const CREATE_NOTE= 'add note';
export function createNote() {
    return {
        type: CREATE_NOTE
    };
}

export const UPDATE_NOTE = 'update note';
export function updateNote(id: string, task: string) {
    return {
        type: UPDATE_NOTE,
        id,
        task
    }
}

export const DELETE_NOTE = 'delete note';
export function deleteNote(id: string) {
    return {
        type: DELETE_NOTE,
        id
    }
}
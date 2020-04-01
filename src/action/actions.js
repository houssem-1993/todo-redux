import { ADD_TASK, DELETE_TASK, COMPLETE_TASK, EDIT_TASK, TOGGLE_EDIT } from '../Constant/actionsType';



export function addTask (payload) {

    return {type:ADD_TASK,payload}
    
}

export function deleteTask(payload) {
    return {type:DELETE_TASK,payload}
}
export function completeTask(payload){
    return {type:COMPLETE_TASK,payload}
}

export function editTask(payload){
    return {type:EDIT_TASK,payload}
}
export function toggleEdit(payload){
    return {type:TOGGLE_EDIT,payload}
}

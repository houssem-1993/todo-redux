import { ADD_TASK, DELETE_TASK, COMPLETE_TASK, EDIT_TASK, TOGGLE_EDIT } from "../Constant/actionsType"



const stateInitial=[{todo:'my first task',isComplete:true,id:0,isEdited:false},{todo:'my second task',isComplete:false,id:1,isEdited:false}]

const todoReducer=(state=stateInitial,action) => {
switch(action.type){
    case ADD_TASK:
        return state.concat(action.payload)
    case DELETE_TASK:
        return state.filter(el => el.id !==action.payload)
    case COMPLETE_TASK:
        return state.map(el =>el.id === action.payload?{...el,isComplete:!el.isComplete}:el)
    case EDIT_TASK:
        return state.map(el=>el.id ===action.payload.id?action.payload:el)
    case TOGGLE_EDIT:
            return state.map(el =>el.id === action.payload?{...el,isEdited:!el.isEdited}:{ ...el, isEdited: false })
        default:
            return state
    
}
}
export default todoReducer
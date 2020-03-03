import * as actionTypes from '../actions/actionTypes'
import utilityObject from '../../Hoc/Utility/utility'



const initialState = {
newFormData: '',
    taskId: '',
    loading: true,
    taskToUpDateAdded: false
}

const getTaskIdStart = (state, action) => {
    return utilityObject(state, {
        loading: true
    })
}

const populateTaskInput = (state, action) => {
    return utilityObject(state, {
        newFormData: action.newFormData,
        taskId: action.taskId,
        loading: false,
        taskToUpDateAdded: true

    })
}

const resetListRedirect = (state) => {
    return utilityObject(state, {     
        taskToUpDateAdded: false

    })
}

export const selectedTaskReducer =(state = initialState, action) => {

 

    switch (action.type) {
        case actionTypes.GET_TASK_ID_START:
            return getTaskIdStart(state, action)
        case actionTypes.POPULATE_TASK_INPUT:
            return populateTaskInput(state, action)
            case actionTypes.RESET_List_REDIRECT:
            return resetListRedirect(state)
       
            
            
    
        default:
            return state;
    }
}
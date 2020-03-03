
import * as actionTypes from '../actions/actionTypes'
import utilityObject from '../../Hoc/Utility/utility'



const initialState = {
    loading: false,
taskData: null,
currentDate: ''
}

const getTaskStart = (state, action) => {
    return utilityObject(state, {
        loading: true
    })
}

const taskSuccess = (state, action) => {
    
    return utilityObject(state, {
        
        taskData: action.taskData,
        loading: false
    })

   
}

const getTaskFailed = (state, action) => {
    return utilityObject(state, {
        loading: false
    })
}
const updateDate = (state, action) => {
    
    return utilityObject(state, {
        currentDate: action.currentDate
    })
}


export const getTaskReducer = (state = initialState, action) => {

switch (action.type) {
    case actionTypes.GET_TASK_START:
        return getTaskStart(state, action)
    case actionTypes.GET_TASK_SUCCESS:
        return taskSuccess(state, action)
     
    case actionTypes.GET_TASK_FAILED:
        return getTaskFailed(state, action)
    
        case actionTypes.UPDATE_DATE:
            return updateDate(state, action)

    default:
        return state
}
    
}
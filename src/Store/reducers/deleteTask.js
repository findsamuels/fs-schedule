import * as actionTypes from '../actions/actionTypes'
import utilityObject from '../../Hoc/Utility/utility'

const initialState = {
    filteredTaskData: [],
    success: false
}

const deleteTaskFailed = (state, action) => {
return utilityObject(state, {
success: false
})
}

const deleteTaskStart = (state, action) => {
    return utilityObject(state, {

    })
}

const deleteTaskSuccess = (state, action) => {

    let filterTaskArray = action.taskArray.filter(filteredTask =>{
        return filteredTask.id !== action.taskId
    })
    let SortedArray = filterTaskArray.sort((a, b) => new Date(a.date) - new Date(b.date))
    console.log(filterTaskArray)
    return utilityObject(state, {
        success: true,
        filteredTaskData: SortedArray
        
    })
}


export const deleteReducer = (state = initialState, action) => {


    switch (action.type) {
        case actionTypes.DELETE_TASK_START:
            return deleteTaskStart(state, action)
        case actionTypes.DELETE_TASK_SUCCESS:
            return deleteTaskSuccess(state, action)
        case actionTypes.DELETE_TASK_FAILED:
            return deleteTaskFailed(state, action) 
           
    
        default:
            return state
    }
}
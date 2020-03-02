import * as actionTypes from '../actions/actionTypes'
import utilityObject from '../../Hoc/Utility/utility'


const initialState = {
    taskUpdated: false,
    loading: false
}

const updateTaskStart = (state) => {
    return utilityObject(state, {
loading: true,
        taskUpdated: false,
    })
}

const updateTaskSuccess = (state) => {
    return utilityObject(state, {
        loading: false,
        taskUpdated: true
    })
}

const updateTaskFailed = (state) => {
    return utilityObject(state, {
        loading: false
    })
}

export const updateTaskReducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.UPDATE_TASK_START:
            return updateTaskStart(state)
        case actionTypes.UPDATE_TASK_SUCCESS:
            return updateTaskSuccess(state)
        case actionTypes.UPDATE_TASK_FAILED:
            return updateTaskFailed(state)
            
        default:
            return state
    }
}

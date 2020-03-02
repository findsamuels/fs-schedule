import * as actionTypes from '../actions/actionTypes'
import utilityObject from '../../Hoc/Utility/utility'
const initialState = {
loading: false,
taskAdded: false
}

export const addTaskReducer = (state = initialState, action) => {

const startTask = (state, action) => {
    return utilityObject(state, {
        loading: true
    })
}

    const taskSuccess = (state, action) => {
        return utilityObject(state, {
            loading: false,
            taskAdded: true,
        })
    }

switch (action.type) {
    case actionTypes.START_TASK:
        return startTask(state, action)
    case actionTypes.TASK_SUCCESS:
        return taskSuccess(state, action)

    default:
        return state
}

}
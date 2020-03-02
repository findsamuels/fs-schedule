import * as actionTypes from '../actions/actionTypes'
import axios from '../../Axios/Axios'


export const deleteTaskStart = () => {
    return {
        type: actionTypes.DELETE_TASK_START
    }
}

export const deleteTaskSuccess = (taskArray, taskId) => {
    return {
        type: actionTypes.DELETE_TASK_SUCCESS,
        taskArray: taskArray,
        taskId: taskId
    }
}

export const deleteTaskFailed = () => {
    return {
        type: actionTypes.DELETE_TASK_FAILED
    }
}








export const deleteTask = (taskArray, taskId) => {

    return dispatch => {
        dispatch(deleteTaskStart())
        axios.delete(`/task/${taskId}.json`)
            .then(res => {

                dispatch(deleteTaskSuccess(taskArray, taskId))
                console.log(res.data)
                console.log('iD:' + taskId)
            })
            .catch(error => {
                dispatch(deleteTaskFailed(error))
                console.log(error)
                console.log('iD:' + taskId)
            })
    }


}
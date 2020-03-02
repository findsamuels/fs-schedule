import * as actionTypes from './actionTypes'
import axios from '../../Axios/Axios'







export const updateTaskStart = () => {
    return{
        type: actionTypes.UPDATE_TASK_START
    }
}

export const updateTaskSuccess = () => {
    return {
type: actionTypes.UPDATE_TASK_SUCCESS
    }
}

export const updateTaskFailed = () => {
    return {
type: actionTypes.UPDATE_TASK_FAILED
    }
}








export const updateTask = (updatedFormData, taskId) => {

    return dispatch => {
        dispatch(updateTaskStart())
        axios.put(`/task/${taskId}.json`, updatedFormData)
            .then(res => {

                dispatch(updateTaskSuccess())
                console.log(res.data)
                console.log('iD:' + taskId)
            })
            .catch(error => {
                dispatch(updateTaskFailed(error))
                console.log(error)
                console.log('iD:' + taskId)
            })
    }


}
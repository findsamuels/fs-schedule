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

export const resetRedirect = () => {
    return {
        type: actionTypes.RESET_REDIRECT
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
               
                
            })
            .catch(error => {
                dispatch(updateTaskFailed(error))
                
            })
    }


}
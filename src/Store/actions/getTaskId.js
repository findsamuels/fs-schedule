import * as actionTypes from './actionTypes'
import taskAxios from '../../Axios/Axios'



export const getTaskIdStart = () => {
    return {
        type: actionTypes.GET_TASK_ID_START,
        
    }

}

export const populateTaskInput = (newFormData, taskId) => {
    return{
        type: actionTypes.POPULATE_TASK_INPUT,
        newFormData: newFormData,
        taskId: taskId,
        
    }
    
}

export const getTaskIdFailed = (error) => {
    return {
        type: actionTypes.GET_TASK_FAILED,
        error: error
    }

}

export const getTaskId = (taskId) => {
   
    return dispatch => {
dispatch(getTaskIdStart())
        taskAxios.get(`/task/${taskId}.json`)
        .then( res => {

            dispatch(populateTaskInput(res.data, taskId))
            console.log(res.data, taskId)
            console.log('iD:'+ taskId)
        })
        .catch(error => {
            dispatch(getTaskIdFailed(error))
            console.log(error)
        })
    }
    
    

    
}


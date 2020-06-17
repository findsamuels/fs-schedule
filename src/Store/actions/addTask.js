import * as actionTypes from './actionTypes'
import axios from '../../Axios/Axios'

export const startTask = () => {
    return{
        type: actionTypes.START_TASK
    }
}

export const taskSuccess = () => {
    return {
        type: actionTypes.TASK_SUCCESS
    }
}

export const taskToRemove = () => {
    return {
        type: actionTypes.TASK_TO_REMOVE
    }
}


export const postTask = (taskData) => {
    return dispatch => {
        dispatch(startTask())
        axios.post('/task.json', taskData )
        
.then( res => {
   
dispatch(taskSuccess(res.data))
})
.catch(err => {

})
    }
}
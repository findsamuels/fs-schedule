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


export const postTask = (taskData) => {
    return dispatch => {
        dispatch(startTask())
        axios.post('/task.json', taskData )
        
.then( res => {
    console.log(taskData)
dispatch(taskSuccess(res.data))
})
.catch(err => {

})
    }
}
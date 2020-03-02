import * as actionTypes from './actionTypes'
import axios from '../../Axios/Axios'





export const getTaskStart = () => {
return{
    type: actionTypes.GET_TASK_START
}
}

export const updateDate = () => {

    let date = new Date()
    return {
        type: actionTypes.UPDATE_DATE,
        currentDate: date
    }
}


export const getTaskSuccess = (taskData) => {
return{
    type: actionTypes.GET_TASK_SUCCESS,
    taskData: taskData
}
}

export const getTask = (token, userId) => {
return dispatch => {
    dispatch(getTaskStart())
    // const queryParams =
    //     '?auth=' + token + '&orderBy="userId"&equalTo="' + userId + '"';
    
    axios.get('./task.json' )
    .then(res => {
        dispatch(getTaskSuccess(res.data))
        dispatch(updateDate())
        console.log(res.data)
    })
    .catch(err => {
        dispatch(getTaskFailed(err))
    })
}
}



export const getTaskFailed = (error) => {
return{
    type: actionTypes.TASK_FAILED,
    error: error
}
}
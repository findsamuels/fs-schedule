export {
startTask,
postTask,

}from './addTask'

export {
getTask,
getTaskSuccess
}from './getTasks'

export {
getTaskId,
populateTaskInput
}from './getTaskId'

export {
updateTask,
updateTaskStart,
updateTaskFailed,
updateTaskSuccess
}from './updateTaskId'

export {
    deleteTask,
    deleteTaskStart,
    deleteTaskFailed,
    deleteTaskSuccess
}from './deleteTask'

export {
toggleSideDrawer
}from './uiAction'

export {
auth,
authStart,
authFailed,
authSuccess,
setRedirectPath,
setAuthState,
logout
}from './auth'
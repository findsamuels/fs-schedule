import React, { Component } from 'react'
import Icon from '../../../Components/Ui/Icons/Icons'
import classes from './SelectedList.module.scss'
import Wrapper from '../../../Components/Ui/Wrapper/Wrapper'
import ErrorBoundry from '../../../Hoc/ErrorBoundry/ErrorBoundry'
import   { connect } from 'react-redux'
import * as actionCreators from '../../../Store/actions/index'
import { Redirect } from 'react-router-dom'
import UpdateTask from '../../UpdateTask/UpdateTask'
class SelectedList extends Component {

 componentDidMount() {
     this.props.onGetTask(this.props.token, this.props.userId)
   
         this.setState({
             formArray: this.props.filteredTaskData,
             taskData: this.props.taskData
         })
     
     
    }
componentWillUnmount(){
    this.props.onResetRedirect()
}
   


state = {

    checked: true,
    selectedItem: '',
    checkTest: [],
    undoIcon: false,
    formArray: [],
    taskData: ''
}




    iconControlCheck = (taskId) => {
        let toCheckString = taskId

    this.setState({
        selectedItem: toCheckString
    })

}

    iconControlUndo = () => {
        this.setState({  
            selectedItem: ''
        })
    }

    updateTaskHandler = (taskId) => {

      
        this.props.onGetTaskId(taskId)



        
          

        
            
        
    }

    deleteTaskHandler = (taskArray, taskId) => {
        this.props.onDeleteTask(taskArray, taskId)
        this.setState({
            taskArray: taskArray
        })
       
        
        
    }
    render(){
        let redirectToUpdateTask = ''
    
        if (this.props.taskToUpDateAdded) {
            redirectToUpdateTask =  <Redirect to="/updateTask" component={UpdateTask} />
       
        }
        
        let taskArray = []

        
       
        if (this.props.success){
            taskArray = this.props.filteredTaskData
            
        }


        let showTasks = '';
        

        if (this.props.taskNotRetrieved) {
            showTasks = <Wrapper spacing='margin' styles='boxShadow'><p>loading...</p></Wrapper>
            
        }

       else {
           
           if (!this.props.success) {
               
               for (let taskList in this.props.taskData) {
                   taskArray.push({
                       id: taskList,
                       task: this.props.taskData[taskList]
                   })
                   
                   
               }
           }
        
    
            let sortedArray = taskArray.sort((a, b) => new Date(a.date) - new Date(b.date))

            showTasks = sortedArray.map(showTask => {


               let checkClass = classes.ItemTask
               let showEdit = (< p > <Icon clicked={() => this.updateTaskHandler(showTask.id)} icon='edit' size='sm' color='white' /></p >)

               let showCheck = (
                   <p><Icon clicked={() => this.iconControlCheck(showTask.id)} icon='check' size='sm' color='white' />  </p>

               )

               let updatedDate = showTask.task.date

               let newDate = new Date(updatedDate)
               const months = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];

           
               let month = months[newDate.getMonth()]
               let day = newDate.getDate()
               let year = newDate.getFullYear()

               if (this.state.selectedItem === showTask.id) {
                   showCheck = (<p><Icon clicked={this.iconControlUndo} icon='undo' size='sm' color='white' /></p>)
                   checkClass = [classes.ItemTask, classes.LineThtrough].join(' ')
                   showEdit = (< p > <Icon clicked={() => this.deleteTaskHandler(taskArray, showTask.id)} icon='trash' size='sm' color='white' /></p >)
               }


               return (
                   <div key={showTask.id} className={classes.SelectedList} >


                       <div className={classes.MonthDiv}>
                           <p>{month + "  " + day + "  " + year}</p>
                           <p>Time: {showTask.task.time}</p>
                       </div>

                       <div className={classes.ItemHeader} >

                           <div> <p>{showTask.task.taskName}</p></div>
                           <div >  <p>{showTask.task.location}</p></div>
                           <div className={classes.iconDiv}>
                               {showCheck}
                               {showEdit}
                           </div>

                       </div>
                       <p className={checkClass}>{showTask.task.toDo}</p>
                   </div>
               )
           })
       }
       

        
          
        
        

        return (
            <ErrorBoundry>
                <Wrapper spacing='margin'>
                    {redirectToUpdateTask}
                    {showTasks}
                </Wrapper>
            </ErrorBoundry>
            

        )
    }
    
    
    
}
const mapStateToProps = state => {
    return {
        taskData: state.tasks.taskData,
        taskNotRetrieved: state.tasks.loading,
        filteredTaskData: state.deleteTask.filteredTaskData,
        success: state.deleteTask.success,
       taskNotAdded: state.addTask.loading,
       token: state.authReducer.token,
        userId: state.authReducer.userId,
        taskToUpDateAdded: state.updateTask.taskToUpDateAdded

    }
}

const mapDispatchToProps = dispatch => {
    return {
        onGetTask: (token, userId) => dispatch(actionCreators.getTask(token, userId)),
        onGetTaskId: (taskId) => dispatch(actionCreators.getTaskId(taskId)),
        onDeleteTask: (taskArray, taskId) => dispatch(actionCreators.deleteTask(taskArray, taskId)),
        onResetRedirect: () => dispatch(actionCreators.resetRedirect())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SelectedList) 
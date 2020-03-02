import React, { Component } from 'react'
import Wrapper from '../../Components/Ui/Wrapper/Wrapper'
import Form from '../../Components/Ui/Form/Form'
import { connect } from 'react-redux'
import Select from '../../Components/Ui/Form/Select/Select'
import FontIcon from '../../Components/Ui/Icons/Icons'
import * as actionCreators from '../../Store/actions/index'
import classes from './UpdateTask.module.scss'
import {Redirect} from 'react-router-dom'
import SelectedList from '../ScheduleList/SelectedList/SelectedList'


class UpdateTask extends Component {

    state = {
        
        date: '',
        time: '',
        toDo: '',
        location: '',
        taskName: "Business",
        touched: false
    };


    onGoBack = () => {
        this.props.history.goBack("/");
    };



    inputHandler = (event) => {
 
        let value = event.target.value

       
       
            this.setState({
                [event.target.name]: value,
                touched: true
            })
        

       

     console.log(value)


    };


    submitTask = (event) => {
        event.preventDefault()
     
        let taskId = this.props.taskId
      
        let taskData = 'no touched'
       
        if (this.state.touched){

            taskData = {
                taskName: this.state.taskName,
                toDo: this.state.toDo,
                location: this.state.location,
                date: this.state.date,
                time: this.state.time,

            }

            this.props.onGetTaskToUpdate(taskData, taskId)
        }
       
           
        console.log(taskData)
          


    };





    render() {
        let reload = ''
        if (this.props.taskUpdated) {
            reload = <Redirect to={'/tasks'} Component={SelectedList} />
        }
      
        let taskId = this.state.taskName;
        let showTashToUpdate = ''
      

        if (this.props.loading) {
            showTashToUpdate = (<p>Loading...</p>)
        }
        else {
            let config = this.props.newFormData
            
            showTashToUpdate = <React.Fragment>
                
                <Form  >
                    <h1 className={classes.Heading}>UPDATE TASK</h1>
                    <Select name="taskName" styles="Rounded" id={taskId} onChange={this.getTaskName}>
                        <option>Business</option>
                        <option>Personal</option>
                        <option>Work</option>
                        <option>Sport</option>
                    </Select>
                    <input 
                     onChange = {(event) => this.inputHandler(event)}
                        className={classes.Input} placeholder="What To Do" type="text" name="toDo" defaultValue={config.toDo}
                     />
                    <input 
                        onChange={(event) => this.inputHandler(event)}
                        className={classes.Input} placeholder="Where?" type="text" name="location" defaultValue={config.location} />
                    <input
                        onChange={(event) => this.inputHandler(event)}
                        className={classes.Input}  type="date" name="date" defaultValue={config.date} />
                    <input 
                        onChange={(event) => this.inputHandler(event)}
                        className={classes.Input}  type="time" name="time" defaultValue={config.time} />

                    <div className={classes.ScheduleIcon}>
                        <FontIcon clicked={this.submitTask}   icon="plus" fontSize="md" color="darkGrey" />
                    </div>
                </Form>
            </React.Fragment>
        }


        return (

            <Wrapper spacing="margin" >
                {reload}
                {showTashToUpdate}
            </Wrapper>



        );
    }
}


const mapStateToProps = state => {
    return {
        newFormData: state.updateTask.newFormData,
        taskId: state.updateTask.taskId,
        currentDate: state.tasks.getTaskReducer,
        loading: state.updateTask.loading,
        taskUpdated: state.updateTaskReducer.taskUpdated
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onGetTaskToUpdate: (taskToUpdate, taskId) => dispatch(actionCreators.updateTask(taskToUpdate, taskId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateTask)
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
import Input from '../../Components/Ui/Form/Input/Input'


class UpdateTask extends Component {

componentDidMount(){

   
}

componentWillUnmount(){
    this.props.onResetListRedirect()
}

    state = {
        
        taskToUpDate: {
            date: {
                value: this.props.newFormData.date,
                type: 'date',
                min: new Date(),
                touched: false,
                isValid: true
            },
            time: {
                value: this.props.newFormData.time,
                type: 'time',
                touched: false,
                isValid: true
            },
            toDo: {
                value: this.props.newFormData.toDo,
                placeholder: 'What To Do',
                type: 'text',
                touched: false,
                isValid: true
            },
            location: {
                value: this.props.newFormData.location,
                placeholder: 'Where',
                type: 'text',
                touched: false,
                isValid: true
            },
   
        },

       
        taskName: {
            value: this.props.newFormData.taskName
        } 
       
    };


    onGoBack = () => {
        this.props.history.goBack("/");
    };



    inputHandler = (event, inputName) => {
 
        let value = event.target.value
let touched = true
let isValid = true
        let updatedInput = {

            ...this.state.taskToUpDate,
            [inputName]: {
                ...this.state.taskToUpDate[inputName],
                value: value,
                touched: touched,
                isValid: isValid
            }
        }
       
       
            this.setState({
                taskToUpDate: updatedInput,
                
            })
        
  


    };

    getSelectHandler = (event) =>{
let value = event.target.value

let taskNameValue = {
    ...this.state.taskName,
    value: value
}

this.setState({
    taskName: taskNameValue
})
    }


    submitTask = (event) => {
        event.preventDefault()
     
        let taskId = this.props.taskId
      
        let taskData = ''
       
        

            taskData = {
                taskName: this.state.taskName.value,
                toDo: this.state.taskToUpDate.toDo.value,
                location: this.state.taskToUpDate.location.value,
                date: this.state.taskToUpDate.date.value,
                time: this.state.taskToUpDate.time.value,

            }

            this.props.onGetTaskToUpdate(taskData, taskId)
        
        if (this.props.taskUpdated) {
           this.props.history.push('/tasks')
        }
           
     
          


    };





    render() {
       
        let reload = ''

        if (this.props.taskUpdated) {
            reload = <Redirect to='tasks' Component={SelectedList}/>
        }
        let taskId = this.state.taskName;
        let showTaskToUpdate = ''
        let showInputs = ''

        let updateFormArray = []
        for (let formElement in this.state.taskToUpDate) {
            updateFormArray.push({
                id: formElement,
                config: this.state.taskToUpDate[formElement]
            })
        }
      
        showInputs = (

            updateFormArray.map(updatedInput => {

                return (
                    <Input
                        key={updatedInput.id}
                        placeholder={updatedInput.config.placeholder}
                        value={updatedInput.config.value}
                        type={updatedInput.config.type}
                        min={updatedInput.config.min}
                        invalid={!updatedInput.config.isValid}
                        touched={updatedInput.config.touched}
                        onChange={(event) => this.inputHandler(event, updatedInput.id)}
                    />
                )
            }))

       
if(!this.props.taskToUpDateAdded){
    showTaskToUpdate = (<p>Loading...</p>)
}





        if (this.props.taskToUpDateAdded) {

            showTaskToUpdate = (

                <Form>
                    <h1 className={classes.Heading}>UPDATE TASK</h1>
                    <Select value={this.state.taskName.value} name="taskName" styles="Rounded" id={taskId} onChange={this.getSelectHandler}>
                        <option>Business</option>
                        <option>Personal</option>
                        <option>Work</option>
                        <option>Sport</option>
                    </Select>
                    {showInputs}
                    <div className={classes.ScheduleIcon}>
                        <FontIcon clicked={this.submitTask} icon="plus" fontSize="md" color="darkGrey" />
                    </div>
                </Form>
            )
        }

       
           



           

        


        return (

            <Wrapper spacing="margin" >
                {reload}
                {showTaskToUpdate}
             
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
        taskUpdated: state.updateTaskReducer.taskUpdated,
        taskToUpDateAdded: state.updateTask.taskToUpDateAdded
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onGetTaskToUpdate: (taskToUpdate, taskId) => dispatch(actionCreators.updateTask(taskToUpdate, taskId)),
        onResetListRedirect: () => dispatch(actionCreators.resetListRedirect())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateTask)
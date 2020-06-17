import React, { Component } from 'react'
import classes from './Schedule.module.scss'
import Form from '../../Components/Ui/Form/Form'
import Input from '../../Components/Ui/Form/Input/Input'
import Select from '../../Components/Ui/Form/Select/Select'
import FontIcon from '../../Components/Ui/Icons/Icons'
import ErrorBoundry from '../../Hoc/ErrorBoundry/ErrorBoundry'
import Wrapper from '../../Components/Ui/Wrapper/Wrapper'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

import * as actionCreators from '../../Store/actions/index'
import SelectedList from '../ScheduleList/SelectedList/SelectedList'
class Schedule extends Component {

  componentWillUnmount(){
      this.props.onRemoveTask()
  }
  state = {
    tasks: {
      toDo: {
        elementConfig: {
          placeholder: "What To Do",
          type: "text",
          maxlength: "30"
        },
        value: "",
        touched: false
      },
      location: {
        elementConfig: {
          placeholder: "Where?",
          type: "text",
          maxlength: "20"
        },
        value: "",
        touched: false
      },
      date: {
        elementConfig: {
         
          type: "date",
          label: 'What date',
              min: "20/03/2020"
        },
          value: " 2020-03-20" ,
        touched: false
      },
      time: {
        elementConfig: {
          placeholder: "What Time?",
          type: "time",
          label: 'What time?'
        },
          value: "09:00",
        touched: false
      },
    },
    taskName:  "Business"
  };

  onGoBack = () => {
    this.props.history.goBack("/");
  };

  getTaskName = (event) => {

    this.setState({
      taskName: event.target.value
    })
  }

  inputHandler = (event, inputName) => {
    let value = event.target.value

    let updateTasks = {

      ...this.state.tasks,
          [inputName]:{
            ...this.state.tasks[inputName],
            value: value,
            touched: true

          }

    }
    



    this.setState({
      tasks: updateTasks
    })



  };


  submitTask = (event) => {
event.preventDefault()

const taskData = {
  taskName: this.state.taskName,
  toDo: this.state.tasks.toDo.value,
  location: this.state.tasks.location.value,
  date: this.state.tasks.date.value,
  time: this.state.tasks.time.value,
  userId: this.props.userId

}

this.props.onPostTasks(taskData)


  this.props.history.push("/")
    this.props.onGetTask()
   


  };

  
  render() {
let reload = ''
      if (this.props.taskAdded){
reload = <Redirect to={'/tasks'} Component={SelectedList}/>
      }
    let scheduleArray = [];

    for (let schedules in this.state.tasks) {
      scheduleArray.push({
        id: schedules,
        config: this.state.tasks[schedules]
      });
    }
    const scheduleInput = scheduleArray.map(schedule => (
      <Input
            label={schedule.config.elementConfig.label}
        key={schedule.id}
        placeholder={schedule.config.elementConfig.placeholder}
        type={schedule.config.elementConfig.type}
        min={schedule.config.elementConfig.min}
        maxLength={schedule.config.elementConfig.maxlength}
       
        value={schedule.config.value}
        onChange={(event) => this.inputHandler(event,schedule.id)}
        styles="Rounded"
        
      />
    ));
    let taskId = this.state.taskName;
    return (

        <Wrapper spacing="margin" >
            {reload}
          <ErrorBoundry>
          
          <Form >
                    <h1 className={classes.Heading}>ADD TASK</h1>
            <Select styles="Rounded" id={taskId} onChange={this.getTaskName}>
              <option>Business</option>
              <option>Personal</option>
              <option>Work</option>
              <option>Sport</option>
            </Select>
            {scheduleInput}
           
            <div className={classes.ScheduleIcon}>
                        <FontIcon clicked={this.submitTask} icon="plus" fontSize="md" color="darkGrey" />
              
            </div>
          </Form>
          </ErrorBoundry>
         
        </Wrapper>

    

    );
  }
}

const mapStateToProps = state => {
  return{
    currentDate: state.tasks.getTaskReducer,
      taskAdded: state.addTask.taskAdded,
      userId: state.authReducer.userId,
      token: state.authReducer.token,
  }
}

const mapDispatchToProps = dispatch => {
  return{
    onPostTasks: (taskData) => dispatch(actionCreators.postTask(taskData)),
    onPopulateTaskInput: (taskData, id) => dispatch(actionCreators.populateTaskInput(taskData, id)),
     onGetTask: () => dispatch(actionCreators.getTask()),
     onRemoveTask: () => dispatch(actionCreators.taskToRemove())
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Schedule)
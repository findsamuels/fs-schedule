import React, { Component } from 'react';
import Layout from '../src/Hoc/Layout/Layout'
import Schedule from '../src/Container/Schedule/Schedule'
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import SelectedList from './Container/ScheduleList/SelectedList/SelectedList';
import {connect} from 'react-redux'
import UpdateTask from './Container/UpdateTask/UpdateTask';
import Auth from './Container/Auth/Auth';
import * as actionCreators from '../src/Store/actions/index'
import Logout from './Container/Logout/Logout';

class App extends Component {

componentDidMount(){
  this.props.onTryAutoLogin()
}
  render(){

let authAccess = (
  <Switch>
    <Route path="/login" exact component={Auth} />
    <Redirect to="/login" component={Auth} />
  </Switch>
);

if(this.props.auth){
authAccess = (
  <Switch>
        <Route path="/" exact component={Schedule} />
    <Route path="/tasks" component={SelectedList} />
    <Route path="/updateTask" component={UpdateTask} />
    <Route path="/logout" component={Logout} />
    <Redirect to="/" />
  </Switch>
);
}


    return(
     
        <Layout >

          {authAccess}

        </Layout>
 
 )
  }
}

const mapStateToProps = state => {
  return {
    taskId: state.updateTask.taskId,
    loading: state.updateTask.loading,
    auth: state.authReducer.token !== null
  };
}

const mapDispatchToProps = dispatch => {
  return{
    onTryAutoLogin: () => dispatch(actionCreators.setAuthState())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

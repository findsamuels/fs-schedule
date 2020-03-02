import React, { Component }  from 'react'
import classes from './ErrorBoundry.module.scss'
class ErrorBoundry extends Component {
    state = {
        hasError: false
    }

    logErrorToMyService=(error, errorInfo) => {

    }

    static getDerivedStateFromError(error, errorInfo){
        this.setState({
            hasError: true
        })
    }
    
    
    componentDidCatch(error, errorInfo ) {
     
        this.logErrorToMyService(error, errorInfo)
        
        this.setState({
            hasError: true
        })
    }



  
    render(){

       
        return this.state.hasError ? <div className={classes.ErrorBoundry}>
            <p>We're sorry — something's gone wrong.</p>
            <p>Our team has been notified</p></div> 
            : this.props.children
    }
}

export default ErrorBoundry


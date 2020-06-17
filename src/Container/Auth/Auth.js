import React, { Component } from 'react'
import classes from './Auth.module.scss'
import Wrapper from '../../Components/Ui/Wrapper/Wrapper'
import Form from '../../Components/Ui/Form/Form'
import Input from '../../Components/Ui/Form/Input/Input'
import Button from '../../Components/Ui/Button/Button'
import {connect} from 'react-redux'
import * as actionCreators from '../../Store/actions/index'
import { Redirect } from 'react-router-dom'
import Schedule from '../Schedule/Schedule'

class Auth extends Component {

    state = {

        authUser:  {
email: {
    value: '',
    
    touched: false,
    placeholder: 'Email',
    name: 'email',
    type: 'text',
    label: 'Email',
    autocomplete: 'off',
                isvalid: true,
},
password: {
                value: '',
                
                placeholder: 'Password',
                name: 'password',
                type: 'password',
    autocomplete: 'new-password',
    label: 'Password',
    touched: false,
    isvalid: true,
            }
        },
        shouldSignUp: true,
        errorMessage: '',
        disableButton: false
    }

    validateInput = (inputName, value) => {
        
        

    }
   

    onGetUserInfo= (event, inputName) => {


        let value = event.target.value
       

       let errorMessage = ''
let touched =  true
        let isvalid = true
       

        let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        switch (inputName) {
            case 'email':
              
                if ( touched && !emailRegex.test(value)) {
                    
                    isvalid = false
                }
               
               break;
            case 'password':
                if (touched && value.length < 6) {
                    
                    isvalid = false
                }
            break;
            default:
                isvalid = true
                break;
      
        }
        let updatedUser = {

            ...this.state.authUser,
            [inputName]: {
                ...this.state.authUser[inputName],
                value: value,
                touched: touched,
                isvalid: isvalid,
                enableButton: isvalid
            }
        }
        this.setState({
            authUser: updatedUser,
            errorMessage: errorMessage,
        })

       
    }

    toggleAuthType = (event) => {
       event.preventDefault()
this.setState(prevState => {
    return{
        shouldSignUp: !prevState.shouldSignUp
    }
})
       
        
    }
    
    submitUser = (event) => {
event.preventDefault()

    this.props.onAuthUser(this.state.authUser.email.value, this.state.authUser.password.value, this.state.shouldSignUp)


    this.props.onSetRedirectPath("/");

        
       
    }

    render(){
        let autoRedirect = null
        if (this.props.auth) {
           autoRedirect = <Redirect to={this.props.redirectPath} component={Schedule}/>
        }


        let authTypeButton = this.state.shouldSignUp
          ? "  Login"
          : "Signup";
        let authButton = this.state.shouldSignUp ? 'Signup' : 'Login'

        let userArray = []
        for(let user in this.state.authUser){
            userArray.push({
                id: user,
                config: this.state.authUser[user]
            })
        }

        let returnUsers = userArray.map(returnUser => {
            return(
                <Input key={returnUser.id} 
                placeholder={returnUser.config.placeholder}
                    name={returnUser.config.name}
                    touched={returnUser.config.touched}
                    invalid={!returnUser.config.isvalid}
                    label={returnUser.config.label}
                    type={returnUser.config.type}
                    // autocomplete={returnUser.config.autocomplete}
                    onChange={(event) => this.onGetUserInfo(event, returnUser.id)}
                />
            )
        })

        return(
            <Wrapper spacing='margin'>
                {autoRedirect}
                <h2 className={classes.Heading}>Simple and convinient task scheduling app</h2>
                <div className={classes.Auth}>
                    
                    <Form >
                        <h4 className={classes.Heading}>SIGN IN OR REGISTER BELOW</h4>
        <p className={classes.ErrorMessage}>{this.state.errorMessage}</p>
                        {returnUsers}
                        
                            <Button clicked={this.submitUser} display='Block' color='grey'>{authButton}</Button>
                           
                        
                        <p className={classes.AuthType} onClick={this.toggleAuthType}>Click here to to <span className={classes.AuthTypeButton}>{authTypeButton}</span></p>
                          
                        
                    </Form>
                </div>
                
            </Wrapper>
        )
    }
}


const mapStateToProps = state => {
    return {
      auth: state.authReducer.token !== null,
        
      errorMessage: state.authReducer.errorMessage !== null,
      redirectPath: state.authReducer.path
    };
}

const mapDispatchToProps = dispatch => {
    return{
        onAuthUser: (email, password, shouldSignUp) => dispatch(actionCreators.auth(email, password, shouldSignUp)),
        onSetRedirectPath: () => dispatch(actionCreators.setRedirectPath('/'))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth)
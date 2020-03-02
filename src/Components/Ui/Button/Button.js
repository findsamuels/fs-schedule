import React from 'react'
import classes from './Button.module.scss'

const button = (props) => {
    let btnClasses= []
   


    if (!props.disabled) {
        btnClasses = [classes[props.btnType], classes[props.color], classes[props.display], classes[props.margin], classes.Button]
    }

    if (props.disabled) {
        btnClasses = [classes.Disabled, classes[props.display]]
}



    return(
    <button 
    onClick={props.clicked}
   disabled={props.disabled}
    className={btnClasses.join(' ')}
    >{props.children}</button>
    )
}

export default button
import React from 'react'
import classes from './Input.module.scss'
const input = (props) => {
let inputClass = []

if(!props.invalid){
    inputClass = [
        classes.Input,
        classes[props.styles],
      
    ];
}


    if (props.invalid){
    inputClass = [
        classes.Input,
        classes[props.styles],
        classes.Invalid
    ];
}


    return(
      <React.Fragment>
        <label
        className={classes.Label}
        >{props.label}</label>
        <input
          maxLength={props.maxlength}
        min={props.min}
        name={props.name}
        autoComplete={props.autocomplete}
          onChange={props.onChange}
          className={inputClass.join(' ')}
          placeholder={props.placeholder}
          value={props.value}
          
          type={props.type}
       
         

        />
      </React.Fragment>
   
    )
}

export default input
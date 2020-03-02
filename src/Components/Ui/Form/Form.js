import React from 'react'
import classes from './Form.module.scss'
const form = (props) => {

    return <form ref={props.ref} className={[classes.Form, classes[props.formStyle]].join(' ')} onSubmit={props.onSubmit}> {props.children} </form>;

}

export default form
import React from 'react'
import  Container  from 'react-bootstrap/Container'
import classes from './Wrapper.module.scss'

export const wrapper = (props) => {

    let WrapClass = [
        classes.Wrapper,
        classes[props.width],
        classes[props.spacing],
        classes[props.styles]
    ].join(' ')

    return(
        <Container className={WrapClass}>
            {props.children}
        </Container>
    )
}

export default wrapper
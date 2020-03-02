import React from 'react'
import classes from './BackDrop.module.scss'
import { connect } from 'react-redux'
const backDrop = (props) => {

    let BackDropClass = [classes.BackDrop, classes.hide].join(' ')
    if(props.showDrawer){
    BackDropClass = classes.BackDrop

    }

    return(
        <div onClick={props.clicked} className={BackDropClass}>
    
</div>
    )
}
const mapStateToProps = state => {
    return {
        showDrawer: state.uiReducer.showDrawer
    }
}

export default connect(mapStateToProps, null)(backDrop)
import React, { Component } from 'react'
import classes from './Layout.module.scss'
import ScheduleBanner from '../../Components/ScheduleBanner/ScheduleBanner'
import * as actionCreators from '../../Store/actions/index'
import SideNavItems from '../../Components/SideDrawer/SideNavItems/SideNavItems'
import BackDrop from '../../Components/Ui/BackDrop/BackDrop'
import { connect } from 'react-redux'
class layout extends Component {


    toggleSideDrawer = () => {
        this.props.onToggleSideDrawer()
    }
   

render(){
    let drawerClass = null
    if (this.props.auth) {
        drawerClass = null
    }
    else{
        drawerClass = (
            <React.Fragment>
                <BackDrop clicked={this.toggleSideDrawer} />
                <SideNavItems clicked={this.toggleSideDrawer} />
            </React.Fragment>
            
        )
    }
    return (
        <div className={classes.Layout}>
            <ScheduleBanner clicked={this.toggleSideDrawer}/>
           
            {drawerClass}
            <main className={classes.Main}>{this.props.children}</main>
        </div>
    )
}
   
  
    
}

const mapStateToProps = state => {
    return {
    auth: state.authReducer.token === null
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onToggleSideDrawer: () => dispatch(actionCreators.toggleSideDrawer())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(layout)
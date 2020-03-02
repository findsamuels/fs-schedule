import React from 'react'
import classes from "./SideDrawer.module.scss";
import { connect } from 'react-redux'
const SideDrawer =(props) => {


        let drawerClass = [
                classes.SideDrawer,
                classes.hide,
                
        ].join(' ')

      

        if (props.showDrawer) {
                drawerClass = classes.SideDrawer
        }

        return(
            <div onClick={props.clicked} className={drawerClass}>
                <div className={classes.DrawerBanner}><h3>WELCOME TO FS-SCHEDULE</h3></div>
                {props.children}
                        
                </div>
        )
    


    
}

const mapStateToProps = state => {
        return {
                showDrawer: state.uiReducer.showDrawer,
                auth: state.authReducer.token === null
        }
}

export default connect(mapStateToProps, null)(SideDrawer)


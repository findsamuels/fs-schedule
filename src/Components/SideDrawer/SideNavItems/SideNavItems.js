import React, {Component} from 'react'
import classes from './SideNavItems.module.scss'
import Icon from '../../Ui/Icons/Icons'
import SideNavItem from './SideNavItem/SideNavItem'
import { connect } from 'react-redux'
import * as actionCreators from '../../../Store/actions/index'
import SideDrawer from '../../Ui/SideDrawer/SideDrawer'
class drawerContent extends Component  {


toggleDrawer = () => {
    this.props.onToggleSideDrawer()
}


render(){


    let navigations = {

       
        add: {
            icon: 'plus',
            color: 'white',
            fontSize: 'sm',
            text: 'Add Task',
            link: '/'
        },
        view: {
            icon: 'tasks',
            color: 'white',
            fontSize: 'sm',
            text: 'View Task',
            link: '/tasks'
        },
        // profile: {
        //     icon: 'grin-beam',
        //     color: 'white',
        //     fontSize: 'sm',
        //     text: 'Profile',
        //     link: '/profile'
        // },
        logout: {
            icon: 'trash',
            color: 'white',
            fontSize: 'sm',
            text: 'Logout',
            link: '/logout'
        }
    }

    let navArray = [];

    for (let nav in navigations) {
        navArray.push({
            id: nav,
            items: navigations[nav]
        })
    }

    let myNavItems = navArray.map(myNavItem => (
        <SideNavItem key={myNavItem.id} clicked={this.props.clicked} Link={myNavItem.items.link}>
            <Icon fontSize={myNavItem.items.fontSize} icon={myNavItem.items.icon} color='darkGrey' />
            <span className={classes.NavText}>{myNavItem.items.text}</span>
        </SideNavItem>



    ))
    return (
        <SideDrawer clicked={this.toggleDrawer} >
            <div onClick={this.toggleDrawer} className={classes.SideNavItems}>
                <div className={classes.ProfileBanner}></div>
                {myNavItems}
            </div>
           
        </SideDrawer>
)


}


    
 
}
const mapDispatchToProps = dispatch => {
    return {
        onToggleSideDrawer: () => dispatch(actionCreators.toggleSideDrawer())
    }
}

export default connect(null, mapDispatchToProps)(drawerContent)
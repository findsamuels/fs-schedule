import React from 'react'
import classes from './SideNavItem.module.scss'
import {NavLink} from 'react-router-dom'

const sideNavItem = (props) => {
 
    return(
        <li onClick={props.clicked} className={classes.SideNavItem}>
            <NavLink className={classes.SideNavLink}  to={props.Link} >
                {props.children}
            </NavLink>
        </li>
        
    )
    
}
    
    
   

export default sideNavItem
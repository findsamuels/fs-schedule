import * as actionTypes from '../actions/actionTypes'

export const toggleSideDrawer = (showDrawer) => {
    return{
        type: actionTypes.TOGGLE_SIDE_DRAWER,
        showDrawer: showDrawer
    }
}
import * as actionType from '../actions/actionTypes'
import utilityObject from '../../Hoc/Utility/utility'

const initialState = {
showDrawer: false
}

const toggleSideDrawer = (state, action) =>{
 
    return utilityObject(state, {
    showDrawer: !state.showDrawer
})
}

export const uiReducer = (state = initialState, action) => {

    switch (action.type) {
        case actionType.TOGGLE_SIDE_DRAWER:
            return toggleSideDrawer(state, action)
           
    
        default:
           return state
    }
}
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import * as actionCreators from '../../Store/actions/index'
class Logout extends Component {
    componentDidMount() {
        this.props.onLogout();
    }

    render() {

        return <Redirect to="/login" />

    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(actionCreators.logout())
    }
}

export default connect(null, mapDispatchToProps)(Logout)
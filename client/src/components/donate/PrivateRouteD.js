import React from 'react'
import { Redirect,Route } from 'react-router-dom'

const PrivateRoute = ({component:Dashboard,...rest}) => {
    const token=localStorage.getItem('token')
    return (
        token?<Route component={Dashboard} {...rest} />:<Redirect to="/login"/>
    )
}

export default PrivateRoute
import React from 'react'
import { Redirect,Route } from 'react-router-dom'

const PrivateRouteC = ({component:Profile,...rest}) => {
    const token=localStorage.getItem('token')
    return (
        token?<Route component={Profile} {...rest} />:<Redirect to="/signIn"/>
    )
}

export default PrivateRouteC
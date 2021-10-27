import React from 'react'
import { Redirect,Route } from 'react-router-dom'

const PrivateRouteV = ({component:Vprofile,...rest}) => {
    const token=localStorage.getItem('token')
    return (
        token?<Route component={Vprofile} {...rest} />:<Redirect to="/vlogin"/>
    )
}

export default PrivateRouteV
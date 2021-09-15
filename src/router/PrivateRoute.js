import React from 'react'
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({isAuth, component}) => {
    if(isAuth){
        return <Route component={component}/>;
    }
    return <Redirect to="/"/>  ;
}

export default PrivateRoute;

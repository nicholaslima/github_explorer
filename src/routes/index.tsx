

import React from 'react';
import { Route,Switch } from 'react-router-dom';
import Dashboard from '../pages/dashboard';
import User from '../pages/user';
import GlobalStyle from '../style';

const Routes:React.FC = () => {
    return(
        <>
            <Switch>
                <Route path="/" exact component={ Dashboard }/>
                <Route path="/user/:repository+" exact component={ User }/>

            </Switch>
            <GlobalStyle />
        </>
    )
}

export default Routes;
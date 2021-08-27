import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from '../modules/Home/Containers/Home';

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Redirect from="*" to="/" component={Home} />
    </Switch>
);

export default Routes;

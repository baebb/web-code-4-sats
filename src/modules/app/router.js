// NPM Dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Library Dependencies
// import withAuthorisation from 'lib/authorisation';

// Module Dependencies
import AccessDeniedPage from 'modules/error/pages/access-denied';
import NotFoundPage from 'modules/error/pages/not-found';
import CreateProjectPage from 'modules/project/pages/create-project';

/**
 * RouterMap
 */
const RouterMap = () => (
    <Switch>
        <Route exact path="/" component={CreateProjectPage} />
        <Route path="/access-denied" component={AccessDeniedPage} />
        <Route component={NotFoundPage} />
    </Switch>
);

export default RouterMap;

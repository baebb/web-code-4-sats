// NPM Dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Library Dependencies
// import withAuthorisation from 'lib/authorisation';

// Module Dependencies
import AccessDeniedPage from 'modules/error/pages/access-denied';
import NotFoundPage from 'modules/error/pages/not-found';
// import CockpitPage from 'modules/cockpit/pages/cockpit-page';

/**
 * RouterMap
 */
const RouterMap = () => (
    <Switch>
        <Route exact path="/" component={NotFoundPage} />
        <Route path="/access-denied" component={AccessDeniedPage} />
        <Route component={NotFoundPage} />
    </Switch>
);

export default RouterMap;

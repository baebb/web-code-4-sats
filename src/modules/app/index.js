// NPM Dependencies
import React, { Fragment } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

// Local Dependencies
import './core.styles.scss';
import RouterMap from './router';

const { NODE_ENV } = process.env;

// const App = ({ authenticated }) => (
const App = () => (
    <Fragment>
        <Router>
            <RouterMap />
        </Router>
        <p>{NODE_ENV}</p>
    </Fragment>
);

// App.propTypes = {
//     authenticated: PropTypes.bool.isRequired
// };

const mapStateToProps = () => {
    return {
        // authenticated: state.user.authenticated
    };
};

export default connect(mapStateToProps)(App);

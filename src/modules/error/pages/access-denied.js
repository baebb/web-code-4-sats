// NPM Dependencies
import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Access Denied Page Component
 */
const AccessDeniedPage = () => (
    <div>
        Sorry, you do not have access to this page.<br />
        <Link to="/">Go to the home page.</Link>
    </div>
);

export default AccessDeniedPage;

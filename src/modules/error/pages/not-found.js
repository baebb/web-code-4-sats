// NPM Dependencies
import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Not Found Page Component
 */
const NotFoundPage = () => (
    <div>
        Whoops, page not found <br />
        <Link to="/">Go to the home page.</Link>
    </div>
);

export default NotFoundPage;

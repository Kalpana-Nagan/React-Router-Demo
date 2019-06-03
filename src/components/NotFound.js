import React from 'react';
import {Link} from 'react-router-dom';

const NotFound =() => {
    return(
        <div>
            <h1>This page doesn't exist</h1>
            <p><Link to='/'>Return to Home page</Link></p>
        </div>
    );
};

export default NotFound;
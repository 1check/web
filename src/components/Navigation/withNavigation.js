import React from 'react';
import Navigation from './navigation';

const withNavigation = Component => props => (
    <>
        <Navigation />
        <Component {...props} />
    </>
);

export default withNavigation;

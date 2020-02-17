import React from 'react';
import Navigation from './navigation';

const withNavigation = (Component, theme) => props => (
    <>
        <Navigation theme={theme} />
        <Component {...props} />
    </>
);

export default withNavigation;

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from '../Navigation';
import './index.css';

const App = () => (
    <Router>
        <Navigation />
    </Router>
);

export default App;

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Amplify from 'aws-amplify';

import awsconfig from './aws-exports';
import Routes from './routes';

import './global.css';

Amplify.configure(awsconfig);

function App() {
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;

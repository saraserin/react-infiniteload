import React from 'react';
import { Container } from '@material-ui/core';
import Home from './views/Home';
import './App.css';

const App = () => {
  return (
    <Container maxWidth={false}>
      <Home />
    </Container>
  );
};

export default App;

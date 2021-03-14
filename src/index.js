import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './js/App';
import Header from './js/Header';
import Create from './js/Create';
import Container from '@material-ui/core/Container';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Create />
    <br></br>
    <Container maxWidth="lg">
      <App />
    </Container>
  </React.StrictMode>,
  document.getElementById('root')
);

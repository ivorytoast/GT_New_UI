import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './js/App';
import Header from './js/Header';
import Create from './js/Create';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

ReactDOM.render(
  <React.StrictMode>
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid item xs={12}>
          <Create />
        </Grid>
        <Grid item xs={12}>
          <Container maxWidth="lg">
            <App />
          </Container>
        </Grid>
      </Grid>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
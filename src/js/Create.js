import React from 'react';
import '../css/Create.css';
import logo from './wideBackground.jpg';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import '../css/index.css';

export default function FreeSolo() {
  return (
    <Container disableGutters={true} maxWidth="false" alignItems="center" style={{ width: '100%', height: '100%', backgroundImage: 'url(' + logo + ')','font-family': 'Roboto, sans-serif' }}>
      <Grid container direction="row" justify="center" alignItems="center" spacing={1}>
        <Grid item xs={12}>
          <Container maxWidth="md" style={{'padding-top':'100px'}}>
            <Typography variant="h4" align="center">When you're ready to lease, we're ready to help</Typography>
          </Container>
        </Grid>
        <Grid item xs={12}>
          <Container maxWidth="md">
            <Autocomplete id="free-solo-demo" freeSolo options={top100Films.map((option) => option.title)} renderInput={(params) => (
                <TextField {...params} style={{'background-color':'white'}} label="Enter Car Manufacturer" margin="normal" variant="outlined" />
              )}
            />
          </Container>
        </Grid>
      </Grid>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </Container>
  );
}

const top100Films = [
  { title: 'Mercedes Benz', year: 's500' },
  { title: 'BMW', year: 'm5' },
  { title: 'Audi', year: 'q7' },
  { title: 'Honda', year: 'accord' },
  { title: 'Ram', year: 'pickup' },
  { title: 'Ford', year: 'f-150' },
  { title: 'Subaru', year: 'impreza' },
];

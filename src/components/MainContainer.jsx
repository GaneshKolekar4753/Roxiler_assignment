import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

import TransactionStat from './TransactionStat';
import BarContainer from './BarContainer';
import TransictionData from './TransictionData';
import PieContainer from './PieContainer';


export default function MainContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container sx={{display:"flex", flexDirection:"column", alignItems:"center"}} >
        <h2>
          Dashbord
        </h2>
        {/* <DataTable/> */}
        <TransictionData/>
        <TransactionStat/>
        <BarContainer/>
        <PieContainer/>
      </Container>
    </React.Fragment>
  );
}
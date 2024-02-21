import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MonthDropDown from './MonthDropdown';

export default function TransactionStat() {
  return (
    <>
    <div style={{marginTop:"3em"}}>
      <div>
        <h3>Statistics-{<MonthDropDown/>}</h3>
      </div>
    <List
      sx={{
        width: '100%',
        maxWidth: 360,
        bgcolor: '#F7AA39',
        padding: '20px',
        borderRadius: '10px',
        marginTop:"1em"
      }}
    >
      <ListItem>
        <ListItemText primary={`Line item:  ${123445}`} />
      </ListItem>
      <ListItem>
        <ListItemText primary={`Line item:  ${123445}`} />
      </ListItem>
      <ListItem>
        <ListItemText primary={`Line item:  ${123445}`} />
      </ListItem>
    </List>

    </div>
    </>
    
  );
}

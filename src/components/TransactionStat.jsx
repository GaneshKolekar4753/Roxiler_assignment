
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MonthDropDown from './MonthDropdown';
import { useState } from 'react';

export default function TransactionStat() {
  const [month, setMonth] = useState(1);
  return (
    <>
    <div style={{marginTop:"3em"}}>
      <div>
        <h3>Statistics-{<MonthDropDown month={month} setMonth={setMonth}/>}</h3>
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

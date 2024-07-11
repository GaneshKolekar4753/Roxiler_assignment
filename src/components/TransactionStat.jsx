
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MonthDropDown from './MonthDropdown';
import { useState,useEffect } from 'react';

export default function TransactionStat() {
  const [month, setMonth] = useState(1);
  const [stat,setStat]=useState([]);

  const gettransactionsData = async () => {
    const response = await fetch(
      `http://localhost:5000/api/product/statistics/${month}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    // console.log(data.data);
    setStat(data.data);
    return;
  };

  useEffect(()=>{
    gettransactionsData();
  },[month]);
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
        <ListItemText primary={`Total Sale Amount:  ${stat.totalSaleAmount}`} />
      </ListItem>
      <ListItem>
        <ListItemText primary={`Total sold item:  ${stat.totalSoldItems}`} />
      </ListItem>
      <ListItem>
        <ListItemText primary={`Total unsold item:  ${stat.totalNotSoldItems}`} />
      </ListItem>
    </List>

    </div>
    </>
    
  );
}

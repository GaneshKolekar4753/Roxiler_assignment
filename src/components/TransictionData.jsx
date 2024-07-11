import MonthDropDown from './MonthDropdown';
import DataTable from './DataTable';
import InputTxt from './InputTxt';
import { useState,useEffect } from 'react';
import Button from '@mui/material/Button';



export default function TransictionData() {
  const [month, setMonth] = useState(1);
  const[search,setSearch]=useState("");
  const [trData,setTrData]=useState([]);

  const gettransactionsData = async () => {
    const response = await fetch(
      `http://localhost:5000/api/product/?search=${search}&month=${month}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data.data);
    setTrData([...data.data]);
    return;
  };

  useEffect(()=>{
    gettransactionsData();
  },[month]);

  const handleSearch=()=>{
    gettransactionsData();
  }
  return (
    <>
    <div style={{marginTop:"3em"}}>
      <div style={{display:"flex", justifyContent:"space-between"}}>
        <InputTxt search={search} setSearch={setSearch}>
       </InputTxt>
       <Button style={{background: "#F7AA39"}} onClick={handleSearch}>Search</Button>
        
        <h3>{<MonthDropDown month={month} setMonth={setMonth}/>}</h3>
      </div>
      <DataTable data={trData}/>
    </div>
    </>
    
  );
}

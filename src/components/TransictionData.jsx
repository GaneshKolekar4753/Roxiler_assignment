import * as React from 'react';
import MonthDropDown from './MonthDropdown';
import DataTable from './DataTable';
import InputTxt from './InputTxt';



export default function TransictionData() {
  return (
    <>
    <div style={{marginTop:"3em"}}>
      <div style={{display:"flex", justifyContent:"space-between"}}>
        <InputTxt/>
        <h3>{<MonthDropDown/>}</h3>
      </div>
      <DataTable/>
    </div>
    </>
    
  );
}

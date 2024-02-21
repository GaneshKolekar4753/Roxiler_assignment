import * as React from 'react';
import MonthDropDown from './MonthDropdown';
import Piechart from './PieChart';


export default function PieContainer() {
  return (
    <>
    <div style={{marginTop:"3em"}}>
      <div>
        <h3>Pie Chart stats-{<MonthDropDown/>}</h3>
      </div>
      <Piechart/>
    </div>
    </>
    
  );
}

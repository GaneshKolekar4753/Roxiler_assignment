import * as React from 'react';
import MonthDropDown from './MonthDropdown';
import Barchart from './Barchart';




export default function BarContainer() {
  return (
    <>
    <div style={{marginTop:"3em"}}>
      <div>
        <h3>Bar Chart Stats-{<MonthDropDown/>}</h3>
      </div>
      <Barchart/>
    </div>
    </>
    
  );
}

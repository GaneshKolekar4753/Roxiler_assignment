
import MonthDropDown from './MonthDropdown';
import Barchart from './Barchart';
import { useEffect, useState } from 'react';




export default function BarContainer() {

  const [month, setMonth] = useState(1);
  const [chartData,setChartData]=useState([]);

  const getBarChartData = async () => {
    const response = await fetch(
      `http://localhost:5000/api/product/bar-chart/${month}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    // console.log(data.data);
    setChartData(data.data);
    return;
  };

  useEffect(()=>{
    getBarChartData();
  },[month]);
  return (
    <>
    <div style={{marginTop:"3em"}}>
      <div>
        <h3>Bar Chart Stats-{<MonthDropDown month={month} setMonth={setMonth}/>}</h3>
      </div>
      <Barchart chartData={chartData}/>
    </div>
    </>
    
  );
}

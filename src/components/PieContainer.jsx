
import { useEffect, useState } from 'react';
import MonthDropDown from './MonthDropdown';
import Piechart from './PieChart';


export default function PieContainer() {
  const [month, setMonth] = useState(1);
  const [chartData,setChartData]=useState([]);
  const getPieChartData = async () => {
    const response = await fetch(
      `http://localhost:5000/api/product/pie-chart/${month}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    // console.log(data.data);
    setChartData([...data.data]);
    return;
  };

  useEffect(()=>{
    getPieChartData();
  },[month]);
  return (
    <>
    <div style={{marginTop:"3em"}}>
      <div>
        <h3>Pie Chart stats-{<MonthDropDown month={month} setMonth={setMonth}/>}</h3>
      </div>
      <Piechart chartData={chartData}/>
    </div>
    </>
    
  );
}

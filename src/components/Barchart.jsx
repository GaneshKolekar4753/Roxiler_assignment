import { BarChart } from '@mui/x-charts/BarChart';

export default function Barchart({chartData}) {
  
  return (
    <BarChart
      xAxis={[
        {
          id: 'barCategories',
          data: Object.keys(chartData),
          scaleType: 'band',
        },
      ]}
      series={[
        {
          data: Object.values(chartData),
        },
      ]}
      width={500}
      height={300}
    />
  );
}
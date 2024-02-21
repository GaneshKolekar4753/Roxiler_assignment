
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function MonthDropDown() {
  const [month, setMonth] = React.useState('');

  const handleChange = (event) => {
    setMonth(event.target.value);
  };
  console.log(month)

  return (
    <Box sx={{ marginBottom:"2em", display:'inline' }}>
      <FormControl sx={{width: "120px"}}>
        <InputLabel id="demo-simple-select-label" sx={{border:"none"}}>Month</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={month}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={1}>Jan</MenuItem>
          <MenuItem value={2}>Feb</MenuItem>
          <MenuItem value={3}>March</MenuItem>
          <MenuItem value={4}>April</MenuItem>
          <MenuItem value={5}>May</MenuItem>
          <MenuItem value={6}>Jun</MenuItem>
          <MenuItem value={7}>July</MenuItem>
          <MenuItem value={8}>Aug</MenuItem>
          <MenuItem value={9}>Sept</MenuItem>
          <MenuItem value={10}>Oct</MenuItem>
          <MenuItem value={11}>Nov</MenuItem>
          <MenuItem value={12}>Dec</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

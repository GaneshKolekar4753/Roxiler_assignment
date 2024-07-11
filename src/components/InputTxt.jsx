import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function InputTxt({search,setSearch}) {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="standard-basic"  variant="standard" label='Search Transaction' value={search} onChange={e=>setSearch(e.target.value)} />
    </Box>
  );
}
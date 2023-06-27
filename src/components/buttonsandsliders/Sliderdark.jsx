import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
  return `${value}`;
}

export default function Sliderdark() {
  return (
    <Box sx={{ width: 164 }}>
     
      <Slider
        valueLabelDisplay="auto"
        defaultValue={30}
        getAriaValueText={valuetext}
        color="secondary"
        step={10}
        marks
        min={0}
        max={100}
      />

    </Box>
  );
}
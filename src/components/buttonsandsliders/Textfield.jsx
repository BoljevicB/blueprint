import React from 'react'
import './buttonsandsliders.css'
import TextField from '@mui/material/TextField';

const Textfield = () => {
  return (
    <div>
    <TextField
          id="outlined-multiline-flexible"
          color="secondary"
          multiline
          maxRows={1}
          size='small'
          sx={{ width: '308px', height: '33px'}}
        />
    </div>
  )
}

export default Textfield
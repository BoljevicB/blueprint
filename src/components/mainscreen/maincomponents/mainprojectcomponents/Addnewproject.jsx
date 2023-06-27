import React from 'react'
import '../../mainscreen.css'
import AddIcon from '@mui/icons-material/Add';
import {IconButton } from '@mui/material';

const Addnewproject = () => {
  return (
    <div className='add_new_project_node'>
<IconButton>
      <AddIcon 
      
      sx= {{
        fontSize: 37,
        color: "white", 
      }}
      />
</IconButton>
    </div>
  )
}

export default Addnewproject
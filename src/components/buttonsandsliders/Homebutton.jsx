import React from 'react'
import './buttonsandsliders.css'
import {HomeIcon} from '@primer/octicons-react'
import IconButton from '@mui/material/IconButton';

const Homebutton = () => {
  return (
    <div className='home_button flex items-center justify-center'>
     <IconButton>
      <HomeIcon size={16} className='fill-[#CAC4D0]' />
      </IconButton>
      </div>
  )
}

export default Homebutton
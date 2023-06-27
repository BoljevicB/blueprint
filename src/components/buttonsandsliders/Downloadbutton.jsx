import React from 'react'
import './buttonsandsliders.css'
import {DownloadIcon} from '@primer/octicons-react'
import IconButton from '@mui/material/IconButton';

const Downloadbutton = () => {
  return (
    <div className='download_button'>

        <IconButton >
            
            <DownloadIcon size={16} fill='#CAC4D0'/>

        </IconButton>

    </div>
  )
}

export default Downloadbutton


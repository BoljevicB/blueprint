import React from 'react'
import './buttonsandsliders.css'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import IconButton from '@mui/material/IconButton';

const Playbutton = () => {
  return (
    <div className='download_button'>

        <IconButton >
            
            <PlayArrowIcon 

            sx={{ 
              color: "#CAC4D0", 
            }}
            />
            

        </IconButton>

    </div>
  )
}

export default Playbutton
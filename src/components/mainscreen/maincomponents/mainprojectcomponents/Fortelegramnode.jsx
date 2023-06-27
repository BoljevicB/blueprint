import React from 'react'
import '../../mainscreen.css'
import {TrashIcon, PencilIcon} from '@primer/octicons-react'
import { IconButton } from '@mui/material'


const Fortelegramnode = () => {
  return (
    <div className='for_telegram_node'>
       <IconButton>
          <TrashIcon size={20} fill='#CAC4D0' />
        </IconButton>
        <div className='for_telegram_text'>
            <p>Для телеграм</p>
        <IconButton>
          <PencilIcon size={20} fill='#CAC4D0'  />
        </IconButton>
        </div>
    </div>
  )
}

export default Fortelegramnode
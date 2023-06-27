import React from 'react'
import '../../mainscreen.css'
import {TrashIcon, PencilIcon} from '@primer/octicons-react'
import { IconButton } from '@mui/material'


const Forvknode = () => {
  return (
    <div className='for_vk_node'>
      <IconButton>
        <TrashIcon size={20} fill='#CAC4D0' />
        </IconButton>
        <div className='for_vk_text'>
            <p>Для ВК</p>
        
        <IconButton>
        <PencilIcon size={20} fill='#CAC4D0' />
        </IconButton>
        </div>
    </div>
  )
}

export default Forvknode
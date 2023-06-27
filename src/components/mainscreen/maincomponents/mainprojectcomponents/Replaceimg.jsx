import React from 'react'
import '../../mainscreen.css'
import {TrashIcon, PencilIcon} from '@primer/octicons-react'
import { IconButton } from '@mui/material'


const Replaceimg = () => {
  return (
    <div className='replace_img_node'>
      <IconButton>
        <TrashIcon size={20} fill='#CAC4D0' />
        </IconButton>
        <div className='replace_img_text'>
            <p>Изменение изображ...</p>
            <IconButton>
        <PencilIcon size={20} fill='#CAC4D0'/>
        </IconButton>
        </div>
    </div>
  )
}

export default Replaceimg
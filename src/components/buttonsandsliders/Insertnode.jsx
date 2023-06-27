import React from 'react'
import './buttonsandsliders.css'
import {TrashIcon} from '@primer/octicons-react'

const Insertnode = () => {
  return (
    <button className='insert_node_button'>
        <div> Insertnode </div>
        <TrashIcon size={17} fill='#CAC4D0' />
    </button>
  )
}

export default Insertnode
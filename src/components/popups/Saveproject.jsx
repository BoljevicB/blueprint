import React from 'react'
import './popups.css'
import Textfield from '../buttonsandsliders/Textfield'
import Save from '../buttonsandsliders/Save'


const Saveproject = () => {
  return (
    <div className='save_project'>
        <div className='heading_save_project_text'>
        <h2>Сохранить проект</h2>
        <Textfield/>
        </div>
        <div className='save_project_button'>
        <Save/>
        </div>
    </div>
  )
}

export default Saveproject
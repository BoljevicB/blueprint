import React from 'react'
import './popups.css'
import Textfield from '../buttonsandsliders/Textfield'
import Save from '../buttonsandsliders/Save'


const Namenewproject = () => {
  return (
    <div className='name_new_project'>
        <div className='heading_new_project_name_and_text'>
        <h2>Введите название нового проекта</h2>
        <Textfield/>
        </div>
        <div className='save_new_project_name'>
        <Save/>
        </div>
    </div>
  )
}

export default Namenewproject
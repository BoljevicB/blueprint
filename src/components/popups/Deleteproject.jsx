import React from 'react'
import './popups.css'
import Rejectbutton from '../buttonsandsliders/Rejectbutton'
import Yesbutton from '../buttonsandsliders/Yesbutton'

const Deleteproject = () => {
  return (
    <div className='delete_project'>
        <h2 className='heading_delete_project'>Уверены, что хотите удалить проект
            <br/>“Для телеграм”?</h2>
       <div className='yes_no_buttons'>
        <Rejectbutton/>
        <Yesbutton/>
        </div>
        </div>
  )
}

export default Deleteproject
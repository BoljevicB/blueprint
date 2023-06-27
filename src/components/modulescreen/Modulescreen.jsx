import React from 'react'
import './modulescreen.css'
import Homebutton from '../buttonsandsliders/Homebutton'
import Downloadbutton from '../buttonsandsliders/Downloadbutton'
import Upload from '../buttonsandsliders/Upload'
import Contrbutton from '../buttonsandsliders/Contrbutton'
import Contrastscale from '../buttonsandsliders/Contrastscale'
import Sliderdark from '../buttonsandsliders/Sliderdark'
import Connect from '../buttonsandsliders/Connect'
import Removeconnect from '../buttonsandsliders/Removeconnect'
import Playbutton from '../buttonsandsliders/Playbutton'
import Rightpanel from '../rightpanel/Rightpanel'
import Leftpanel from '../leftpanel/Leftpanel'

const Modulescreen = () => {
  return (
    <div className='modulescreen'>
      <Leftpanel className='module_left_panel'/>

      <div className='module_top_buttons'>
      <Homebutton className='module_home_button'/>
      <p className='module_change_img_heading'>Изменение изображения</p>
      
      <div className='module_play_download'>
      <Playbutton className='module_play_button'/>
      <Downloadbutton className='module_download_button'/>
      </div>
      </div>
     
      <div className='module_middle_buttons'>
      <Upload className='module_upload_button'/>
      <Contrbutton className='module_contrast_button'/>
      <div className='module_contrast_scale_button'>
      <Contrastscale/>
      </div>
      </div>

      <div className='module_bottom_buttons'>
      <Sliderdark className='module_slider_dark'/>

      <div className='module_connect_remove_connect_buttons'>
      <Connect className='module_connect_button'/>
      <Removeconnect className='module_remove_connect_button'/>
      </div>
      </div>

      <Rightpanel className='module_right_button_panel'/>
      

    </div>
  )
}

export default Modulescreen
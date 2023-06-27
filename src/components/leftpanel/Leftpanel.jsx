import React from 'react';
import './leftpanel.css'

import Greyline from '../rightpanel/Greyline'
import Nodsbutton from '../leftpanel/Nodsbutton';
import Pursenode from '../leftpanel/Pursenode';
import Contrast from '../leftpanel/Contrast';
import Blur from '../leftpanel/Blur';
import Colorbalance from '../leftpanel/Colorbalance';
import Contrastscalebutton from './Contrastscalebutton';


function Leftpanel() {
  return (
    
    <div className="left_panel">
      
      <div className='left_panel_top_container'>
      <Nodsbutton/>
      <Pursenode/>
      </div>
      
      <div className='left_panel_line_container'>
      <Greyline/>
      </div>
      
      <div className='left_panel_bottom_container'>
      <Contrast/>
      <Blur/>
      <Colorbalance/>
      <Contrastscalebutton/>
      </div>
      
    </div>
    
  );
}

export default Leftpanel


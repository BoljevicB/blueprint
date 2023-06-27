import React from 'react';
import {ThemeProvider} from '@primer/react'
import './App.css'
import Mainscreen from './components/mainscreen/Mainscreen';
import Modulescreen from './components/modulescreen/Modulescreen';




function App() {
  return (
    <ThemeProvider>
    <div className="App">

     
      <Modulescreen/>
      <Mainscreen/>
    
    </div>
    </ThemeProvider>
  );
}

export default App;

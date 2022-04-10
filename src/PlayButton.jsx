import React from 'react';
import { useState } from 'react';
import './App.css';

const PlayButton = ({ index }) => {

  const [colorTxt, setColorTxt ] = useState('')
  const styles = {
    "text-align": "center",
    padding: ".5em 1.5em",
    color: colorTxt
  };


return(
    
    <button
    style={styles}
    onMouseEnter={() => setColorTxt('pink')} 
    onMouseLeave={() => setColorTxt('black')}>Play</button>
)
};

export default PlayButton;

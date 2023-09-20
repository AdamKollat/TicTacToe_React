import React from "react";
import { useState } from "react";

let counter = 0;

function Square() {
  const [value, setValue] = useState(null);

  function handleClick() {
    counter+=1;
    (counter % 2) == 0 ? setValue('O') : setValue('X');  
  }
  return(
  <button 
    className="square" 
    onClick={handleClick}>
      {value}
  </button>)
}

export default function Board() {
  return (
    <div>
  <div className="board-row">
    <Square />
    <Square />
    <Square />
  </div>
  <div className="board-row">
    <Square />
    <Square />
    <Square />
  </div>
  <div className="board-row">
    <Square />
    <Square />
    <Square />
  </div>
   </div>
  );
}



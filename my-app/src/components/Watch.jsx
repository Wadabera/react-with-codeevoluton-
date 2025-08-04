import React, { useState } from 'react'

function Watch() {
  const [num, setnum] = useState(0);
  const add = () => {
    setnum(num + 1);
  }
  const min = () => {
    setnum(num - 1);
  }
  const res = () => {
    setnum(0);
  }
  return (
    <div>
      <h1>counter: {num}</h1>
      <div>
        <button onClick={add}>increament</button>
        <button onClick={min}>decreament</button>
        <button onClick={res}>reset</button>
      </div>
      
    </div>
  )
}

export default Watch

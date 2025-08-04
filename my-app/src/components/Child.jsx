import React from 'react'

function Child(props) {
  return (
    <div>
      <button onClick={()=>props.hand("child")}>yeap</button>
    </div>
  )
}

export default Child

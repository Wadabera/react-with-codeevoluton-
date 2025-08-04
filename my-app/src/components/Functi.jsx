import React from 'react'

function Functi() {
  function name(e) {
    alert(`my name is ${e}`)
     
   }
  return (
    <div>
      <button onClick={()=>name("wada")}>maqa kee</button>
      
    </div>
  )
}

export default Functi

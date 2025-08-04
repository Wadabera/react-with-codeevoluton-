import React, { useState } from 'react'

function Wadafun() {
  const [mess, setmess] = useState('baga gara guduu gala etio telecom nagan dhuftan')
 const  dalagaa = () => {
    setmess(
      'waan dawwataniif guddaa issin galatefanna galatoma  hirmanaan kessan itti yaa fufu'
    )
  }
  return (
    <div>
      <h1>{mess}</h1>
      <button onClick={dalagaa}>dawwadhaa</button>

      
    </div>
  )
}

export default Wadafun

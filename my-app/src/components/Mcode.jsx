import React from 'react'

function Mcode(props) {
  return (
    <div className='wada'>
      
      <h1>name:{props.name} ,age:{props.age} ,sex:{props.sex}</h1>
      {props.children}
      
    </div>
    )
  }
  
  export default Mcode

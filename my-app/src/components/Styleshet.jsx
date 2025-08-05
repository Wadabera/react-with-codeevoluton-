import React from 'react'
import './My.css'
function Styleshet(props) {
  const add = {
    fontSize:'277px'
  }
    
  
  const temp=props.myclass ? "myclass": ""
  return (
    <div>
      <h1 className={`${ temp } font-xl ${add}`}>styleshet</h1>
      
    </div>
  )
}

export default Styleshet

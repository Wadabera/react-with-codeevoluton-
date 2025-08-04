import React from 'react'

function List() {
  const names = ['wada', 'tola', 'guddata', 'bekaa']
  const arrayitems = names.map(name => <li>{name }</li>)
  return (
    <div>
      <ul>
          {arrayitems}
      </ul>
    
      
    </div>
  )
}

export default List

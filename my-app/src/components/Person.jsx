import React from 'react'

function Person(props) {
  return (
    <div>
      <ul>
        
       {props.people.map((person)=>(<li key={person.id}>
          name: {person.name} age:{person.age} 
          </li>))} 
        
      </ul>
      
    </div>
  )
}

export default Person

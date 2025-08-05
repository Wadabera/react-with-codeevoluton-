import React from 'react'
import Person from './Person';
function PeopleList() {
  const people = [
    { id: 1, name: 'tola', age: 24 },
    { id: 2, name: 'guta', age: 28 },
    { id: 3, name: 'beka', age: 29 }
  ];
  return (
    <div>
      <h1>list of people</h1>
      <Person people={ people} />
      
    </div>
  )
}

export default PeopleList

import React from 'react'
import '../index.css'

function Childlist(props) {
  return (
    <div className='student'>
      <ul>
        {props.student.map((stu =>
          <li key={stu.id}>full name: {stu.name}  sex: {stu.sex}   age:{stu.age} educaton level :{stu.education }</li> ))}
      </ul>
      
    </div>
  )
}

export default Childlist

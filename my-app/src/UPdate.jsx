import React, {useEffect, useState } from 'react'

function UPdate()
{
  const [count, setcount] = useState(0)
  useEffect(() => {
    document.title = `Count: ${count}`
  }, [count])
  

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setcount(count + 1)}>click me</button>
      <ul>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      
    </div>
  )
}

export default UPdate

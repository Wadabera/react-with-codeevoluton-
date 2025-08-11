import React, { useEffect, useState } from 'react'

function Getdata() {
  const [users, setusers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setusers(data))
      .catch(error => console.log(error))
  }, []);
  return (
    <div>
      <h1>user get request</h1>
      <ul>
        {users.map(user=>(<li key={user.id}>{user.name}</li>))}

      </ul>
      
    </div>
  );
}

export default Getdata

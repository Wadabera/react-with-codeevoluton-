import React, { useState } from 'react'

function Postdata() {
  const [name, setname]=useState('');
  const [email, setemail] = useState('');
  const handlersubmit = (Event) => {
    Event.preventDefault();
    const postData = {
      name: name,
      email: email

      
    };
     fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(postData)
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        alert('Form submitted successfully!');
      })
      .catch(error => {
        console.error('Error:', error);
        alert('Error submitting form!');
      });
  };
    
  

return (
  <div>
    <h1>POST REQUEST EXAMPLES</h1>
    <form onSubmit={handlersubmit}>
      <label>name</label>
      <input type='text' value={name} onChange={(e) => setname(e.target.value)} /><br />
      <label>enter email</label>
      <input type='email' value={email} onChange={(e) => setemail(e.target.value)} />
      <br />
      <button type='submit'>send</button>
    </form>
    
      
  </div>
);
}

export default Postdata

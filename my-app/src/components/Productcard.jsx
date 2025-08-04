import React from 'react';

function Productcard(props) {
  const buy = () => {
   alert(`${props.name} has been added to your cart!`);
    console.log("Buying product:", props.name);
  }
  return (
    <div style={{ border: 'solid red 1px', margin: '20px', padding: '10px', width: '250px' }}>
      <img
        src={props.image}
        alt={props.name}
        style={{
          width: '100%',
          height: '150px',
          objectFit: 'cover',
          borderRadius: '10px'
        }}
      />
      <h2>{props.name}</h2>
      <p>{props.description}</p>
      <h3 style={{ color: props.instock ? 'green' : 'red' }}>
        Price: ${props.price}
      </h3>
      <p>{props.instock ? 'In stock' : 'Out of stock'}</p>
      <button disabled={!props.instock} onClick={buy}>Buy Now</button>
    </div>
  );
}

export default Productcard;

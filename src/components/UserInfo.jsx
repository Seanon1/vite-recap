import React from 'react'

// Destructuring

function UserInfo({name, age, address}) {
  return (
    <div>
       <h2>Name: {name}</h2>
       <p>Age: {age}</p>
       <p>Address: {address}</p>
    </div>
  )
}

export default UserInfo
import React from 'react';


const Smurf = props => {
  return (
      <div className="smurf">
          <h1>Name: {props.char.name}</h1>
          <h1>Age: {props.char.age}</h1>
          <h1>Height: {props.char.height}</h1>
      </div>
  )
}

export default Smurf;

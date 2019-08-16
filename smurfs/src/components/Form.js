import React, { useState } from 'react';


const Form = props => {

  const [input, setInput] = useState({name: '', age: '', height: ''})

const changeHandler = event => {
  setInput([event.target.name]: event.target.value)
}

  return (
    <form>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={input.name}
          onChange={changeHandler}
        />
      </label>
      <label>
        Age:
        <input
          type="text"
          name="age"
          value={input.age}
          onChange={changeHandler}
        />
      </label>
      <label>
        Height:
        <input
          type="text"
          name="height"
          value={input.height}
          onChange={changeHandler}
        />
      </label>
    </form>
  )
}

export default Form;

import React, { useState } from 'react';
import { Form, Field, withFormik } from 'formik';
import axios from 'axios';

const ListForm = props => {

  const [input, setInput] = useState({name: '', age: '', height: ''})

const changeHandler = event => {
  setInput({[event.target.name]: event.target.value})
}

  return (
    <Form>
      <Field type="text" name="name" placeholder="name"/>
      <Field type="text" name="age" placeholder="age"/>
      <Field type="text" name="height" placeholder="height"/>
      <button type='submit'>Submit</button>
    </Form>
  )
}

const FormikForm = withFormik({
  mapPropsToValues(values){
    return {
      name: values.name || '',
      age: values.age || '',
      height: values.height || '',

    }
  },

  handleSubmit(values){
    axios
      .post('http://localhost:3333/smurfs', values)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }
})(ListForm);

export default FormikForm;

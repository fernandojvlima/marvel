import React from 'react';
import './index.css';
import { Field, reduxForm } from 'redux-form';
import showResults from './showResults'

let EditForm = ({ handleSubmit, submitting }) => {
  return (
    <form onSubmit={handleSubmit(showResults, submitting)}>
      <label htmlFor="inputName">Novo Nome: </label>
      <Field className="form-control" name="name" type="text" component="input" />
      <label htmlFor="inputDescription">Nova Descrição:</label>
      <Field className="form-control" name="description" type="text" component="input" />
      <button type="submit" disabled={submitting} id="btn-save" className="btn btn-primary">Save</button>
    </form>
  )
}

EditForm = reduxForm({
  // a unique name for the form
  form: 'demo',
  destroyOnUnmount: false,
})(EditForm)


export default EditForm;

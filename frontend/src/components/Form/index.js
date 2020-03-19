import React from 'react'
import { Field, reduxForm } from 'redux-form';


const Form = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Name</label>
        <Field
          name="name"
          component="input"
          type="text"
          placeholder="Name"
          className="form-control"
        />
      </div>

      <div className="form-group">
        <label>Description</label>
        <Field name="message" component="textarea" className="form-control" />
      </div>
      <div className="form-group">
        <button
          type="submit"
          className="btn btn-primary"
          disabled={pristine || submitting}>
          Send
        </button>
        <button
          type="button"
          className="btn btn-default"
          disabled={pristine || submitting}
          onClick={reset}>
          Reset
        </button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'contactForm'
})(Form)
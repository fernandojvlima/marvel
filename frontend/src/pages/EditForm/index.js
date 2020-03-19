import React from 'react';
import Header from '../../components/Header';
import { connect } from 'react-redux';
import './index.css';
import { Field, reduxForm } from 'redux-form';
import showResults from './showResults'

let EditForm = (props) => {
  const parametrosDaUrl = window.location.href;
  const res = parametrosDaUrl.split('/')
  const id = Number(res[4])
  const characterPicked = props.data.filter(item => item.id === id)
  const { handleSubmit, submitting } = props;

  return (
    <div>
      <Header />
      <div className="main-content">
        <div className="edit-form">
          <div>
            <h4 className="edit-title">Editar o Personagem </h4>
          </div>
          {characterPicked.map((item) => {
            return (
              <div key={item.name}>
                <form onSubmit={handleSubmit(showResults, submitting)}>
                  <div className="formFields">
                    <h4>Novo Nome</h4>
                    <Field className="form-control" name="name" type="text" component="input" />
                    <label htmlFor="inputName" className="previousName">Nome Anterior: {item.name}</label>
                  </div>
                  <div className="formFields">
                    <h4>Nova Descrição:</h4>
                    <Field className="form-control" name="description" type="text" component="input" />
                    <label htmlFor="inputDescription" className="previousName" >Descrição Anterior: {item.description === '' ? 'Sem descrição disponível' : item.description}</label>
                  </div>
                  <button type="submit" id="btn-save" className="btn btn-primary">Save</button>
                </form>
              </div>)
          })}
        </div>
      </div>
    </div>)
}

EditForm = reduxForm({
  // a unique name for the form
  form: 'editCharacter'
})(EditForm)

const mapStateToProps = (state) => {
  return {
    data: state.characters.data,
  }
}

export default connect(mapStateToProps)(EditForm);



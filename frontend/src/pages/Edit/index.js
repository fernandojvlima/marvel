import React from 'react';
import Header from '../../components/Header';
import { connect } from 'react-redux';
import './index.css';
import { editCharacter } from '../../store/actions';

const Edit = (props) => {
  const parametrosDaUrl = window.location.href;
  const res = parametrosDaUrl.split('/')
  const id = Number(res[4])
  const characterPicked = props.data.filter(item => item.id === id)

  const handleInputName = event => {
    const name = event.target.value;
    console.log(name)
  }

  const handleInputDescription = event => {
    const description = event.target.value;
    console.log(description)
  }

  // const Input = (props) => {
  //   return (<div>
  //     {props.label && <label>{props.label}</label>}
  //     <input value={props.value} onChange={props.onChange} placeholder={props.placeholder} type={props.type || "text"} />
  //   </div>)
  // }

  const handleSubmit = (name, description, event) => {
    alert('fui enviado')
    event.preventDefault();
  }

  return (
    <div>
      <Header />
      <div className="container">
        <div>
          <h4 className="edit-title">Editar o Personagem</h4>
        </div>
        {characterPicked.map((item) => {
          return (
            <div key={item.name}>
              <form onSubmit={handleSubmit}>
                <div className="input-nome">
                  <label htmlFor="inputName">Nome</label>
                  <input type="text" className="form-control" id="inputName" placeholder={item.name} onChange={handleInputName} />
                </div>
                <div className="input-description">
                  <label htmlFor="inputDescription">Descrição</label>
                  <input type="text" className="form-control" id="inputDescription" placeholder={item.description === '' ? 'Sem descrição disponível' : item.description} onChange={handleInputDescription} />
                </div>
                <button type="submit" id="btn-save" className="btn btn-primary">Save</button>
              </form>
            </div>)
        })}
      </div>
    </div>)
}



const mapStateToProps = (state) => {
  return {
    isFetching: state.characters.isFetching,
    data: state.characters.data,
    error: state.characters.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadData: () => dispatch(editCharacter())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Edit);



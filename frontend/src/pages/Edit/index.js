import React from 'react';
import Header from '../../components/Header';
import { connect } from 'react-redux';
import './index.css';
import { editCharacter } from '../../store/actions';
import Input from '../../components/Input';

const Edit = (props) => {
  const parametrosDaUrl = window.location.href;
  const res = parametrosDaUrl.split('/')
  const id = Number(res[4])
  const characterPicked = props.data.filter(item => item.id === id)

  const handleInputName = e => {
    const name = e.target.value;
    console.log(name)
  }

  const handleInputDescription = e => {
    const description = e.target.value;
    console.log(description)
  }


  const handleSubmit = (event, name, description) => {
    alert(name, description)
    event.preventDefault();
  }

  return (
    <div>
      <Header />
      <div className="edit-div">
        <div>
          <h4 className="edit-title">Editar o Personagem </h4>
        </div>
        {characterPicked.map((item) => {
          return (
            <div key={item.name}>
              <form onSubmit={handleSubmit}>
                <div className="input-nome">
                  <label htmlFor="inputName">Nome</label>
                  <Input type="text" placeholder={item.name} onChange={handleInputName} />
                </div>
                <div className="input-description">
                  <label htmlFor="inputDescription">Descrição</label>
                  <Input type="text" placeholder={item.description === '' ? 'Sem descrição disponível' : item.description} onChange={handleInputDescription} />
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
    data: state.characters.data,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadData: () => dispatch(editCharacter())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Edit);



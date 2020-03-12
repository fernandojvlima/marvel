import React from 'react';
import Header from '../../components/Header';
import { connect } from 'react-redux';
import './index.css';

const Edit = (props) => {
  const parametrosDaUrl = window.location.href;
  const res = parametrosDaUrl.split('/')
  const id = Number(res[4])
  const characterPicked = props.data.filter(item => item.id === id)
  console.log(characterPicked)

  const handleInputName = (event) => {
    const name = event.target.value;
    console.log(name)
  }

  const handleInputDescription = (event) => {
    const description = event.target.value;
    console.log(description)
  }
  return (
    <div>
      <Header />

      <div className="container">
        <div>
          <h3 className="edit-title">Editar o Personagem {}</h3>
        </div>
      </div>

      {characterPicked.map((item) => {
        return (
          <div key={item.name}>
            <form>
              <div className="form-group col-md-6">
                <label htmlFor="inputCity">Nome</label>
                <input type="text" className="form-control" id="inputCity" placeholder={item.name} onChange={handleInputName} />
              </div>

              <div className="form-group col-md-2">
                <label htmlFor="inputZip">Descrição</label>
                <input type="text" className="form-control" id="inputZip" placeholder={item.description} onChange={handleInputDescription} />
              </div>

              <button type="submit" className="btn btn-primary">Save</button>
            </form>
          </div>)
      })}


    </div>)
}



const mapStateToProps = (state) => {
  return {
    isFetching: state.characters.isFetching,
    data: state.characters.data,
    error: state.characters.error
  }
}

export default connect(mapStateToProps)(Edit);



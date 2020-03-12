import React from 'react';
import Header from '../../components/Header';
import { connect } from 'react-redux';
import './index.css'
import {
  Card, CardImg, CardBody, CardTitle, Jumbotron, Button
} from 'reactstrap';
import { imageExtension } from '../../services/api';
import { Link } from 'react-router-dom';

const Details = (props) => {
  const parametrosDaUrl = window.location.href;
  const res = parametrosDaUrl.split('/')
  const id = Number(res[4])
  const characterPicked = props.data.filter(item => item.id === id)
  console.log(characterPicked)
  return (
    <div>
      <Header />
      {characterPicked.map((item) => {
        return (
          <div className="container" key={item.id}>
            <Card className="card-corpo-details" key={item.id}>
              <CardImg top src={item.thumbnail.path + imageExtension} alt={item.name} className="card-image" />
              <CardBody>
                <Link to={'/edit/' + item.id}><Button color="warning" className="button-edit">Editar</Button>{' '}</Link>
                <CardTitle>{item.name}</CardTitle>
                <p className="card-text">Última Atualização: {item.modified}</p>
                <p className="card-text">Descrição: {item.description === '' ? 'Personagem não possui descrição' : item.description}</p>
              </CardBody>
              <Jumbotron className="Jumbo">
                <h6>Séries que o {item.name} participou :</h6>
                {item.series.items.map((serie) => {
                  return (
                    <div key={serie.name}>
                      <div className="alert alert-info" role="alert">
                        {serie.name}
                      </div>
                    </div>
                  )
                })}
              </Jumbotron>
            </Card>
          </div>
        )
      })}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isFetching: state.characters.isFetching,
    data: state.characters.data,
    error: state.characters.error
  }
}



export default connect(mapStateToProps)(Details);


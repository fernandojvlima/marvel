import React from 'react';
import { connect } from 'react-redux';
import { loadDataCharacterRequest } from '../../store/actions'
import { Card, CardImg, CardBody, CardTitle, Button, Alert } from 'reactstrap';
import { imageExtension } from '../../services/api';
import './index.css';
import { Link } from 'react-router-dom';

const Character = (props) => {

  return (
    <div className="container">
      {props.error && <Alert color="warning">
        Ops! Tivemos um problema nesta requisição!
      </Alert>}
      {props.data.map((item) => {
        return (
          <Card className="card-corpo" key={item.id}>
            <CardImg top src={item.thumbnail.path + imageExtension} alt={item.name} className="card-image" />
            <CardBody>
              <CardTitle>{item.name}</CardTitle>
              <Link to={'/details/' + item.id}><Button className="btn-marvel">Detalhes</Button></Link>
            </CardBody>
          </Card>
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

const mapDispatchToProps = (dispatch) => {
  return {
    loadData: () => dispatch(loadDataCharacterRequest())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Character);


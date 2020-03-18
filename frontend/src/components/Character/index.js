import React from 'react';
import { connect } from 'react-redux';
import { loadDataCharacterRequest } from '../../store/actions'
import { Card, CardImg, CardBody, CardTitle, Button, Spinner } from 'reactstrap';
import { imageExtension } from '../../services/api';
import './index.css';
import { Link } from 'react-router-dom';

const Character = (props) => {
  return (
    <div className="container">
      {props.name === '' && props.data.map((item) => {
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

      {props.filteredItems.length === 0 && props.name !== '' && <Spinner animation="grow" variant="dark" />}

      {props.filteredItems.map((item) => {
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
    data: state.characters.data,
    filteredItems: state.filter.filteredItems,
    name: state.filter.name
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadData: () => dispatch(loadDataCharacterRequest())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Character);


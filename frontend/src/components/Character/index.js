import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadDataCharacterRequest } from '../../store/actions'
import { Card, CardImg, CardBody, CardTitle, Button } from 'reactstrap';
import { imageExtension } from '../../services/api';
import './index.css'


class Character extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.data.map((item) => {
          return (
            <Card className="card-corpo">
              <CardImg top src={item.thumbnail.path + imageExtension} alt={item.name} className="card-image" />
              <CardBody>
                <CardTitle>{item.name}</CardTitle>
                <Button className="btn-marvel">Detalhes</Button>
              </CardBody>
            </Card>
          )
        })}</h3>
      </div>
    )
  }
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


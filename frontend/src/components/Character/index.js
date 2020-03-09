import React from 'react';
import { Card, CardImg, CardBody, CardTitle, Button } from 'reactstrap';
import { imageExtension } from '../../services/api';
import './index.css'

const Character = (props) => {
  const item = props.item;

  return (
    <div>
      <Card className="card-corpo">
        <CardImg top src={item.thumbnail.path + imageExtension} alt={item.name} className="card-image" />
        <CardBody>
          <CardTitle>{item.name}</CardTitle>
          <Button className="btn-marvel">Detalhes</Button>
        </CardBody>
      </Card>
    </div>
  )
}

export default Character;
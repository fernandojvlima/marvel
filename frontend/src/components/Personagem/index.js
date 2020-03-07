import React from 'react';
import { Card, CardImg, CardBody, CardTitle, Button } from 'reactstrap';
import { imageExtension } from '../../Api';

const Personagem = (props) => {
  const item = props.item;
  const index = props.index;

  return (
    <div className="teste">
      <Card className="card-corpo">
        <CardImg top src={item.thumbnail.path + imageExtension} alt={item.name} className="card-image" />
        <CardBody key={index} >
          <CardTitle>{item.name}</CardTitle>
          <Button className="btn-marvel">Detalhes</Button>
        </CardBody>
      </Card>
    </div>
  )
}

export default Personagem;
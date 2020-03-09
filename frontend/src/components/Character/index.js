import React from 'react';
import { Card, CardImg, CardBody, CardTitle, Button } from 'reactstrap';
import { imageExtension } from '../../Api';

const Character = (props) => {
  const item = props.item;
  const index = props.index;

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
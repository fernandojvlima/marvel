import React from 'react';
import { Card, CardImg, CardBody, CardTitle, Button } from 'reactstrap';
import { imageExtension } from '../../Api';

const Personagem = (props) => {
  const item = props.item;
  const index = props.index;

  return (
    <Card>
      <CardImg top width="100%" src={item.thumbnail.path + imageExtension} alt={item.name} />
      <CardBody key={index}>
        <CardTitle>{item.name}</CardTitle>
        <Button>Detalhes</Button>
      </CardBody>
    </Card>
  )
}

export default Personagem;
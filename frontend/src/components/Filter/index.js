import React from 'react';
import { Form, FormGroup, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { filterCharacter } from '../../store/actions/index';

const Filter = (props) => {


  return (
    <div className="barra-pesquisa">
      <Form>
        <FormGroup className="input-barra">
          <Input type="text" name="personagem" id="input-personagem" placeholder="Digite um personagem..." onChange={(e) => props.filterCharacter(props.data, e.target.value)} />
        </FormGroup>
      </Form>
    </div>
  )
}


const mapStateToProps = (state) => {
  return {
    data: state.characters.data,

  }
}


export default connect(mapStateToProps, { filterCharacter })(Filter);
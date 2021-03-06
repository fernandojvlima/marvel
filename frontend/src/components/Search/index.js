import React from 'react';
import { Form, FormGroup, Input } from 'reactstrap';
import './index.css';
import { connect } from 'react-redux';

const Search = () => {
  return (
    <div className="barra-pesquisa">
      <Form>
        <FormGroup className="input-barra">
          <Input type="text" name="email" id="input-personagem" placeholder="Digite um personagem..." />
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
export default connect(mapStateToProps)(Search);
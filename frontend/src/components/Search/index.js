import React, { Component } from 'react';
import { Form, FormGroup, Input } from 'reactstrap';
import './index.css'

class Search extends Component {
  render() {
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
}

export default Search;
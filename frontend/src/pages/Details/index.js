import React from 'react';
import Header from '../../components/Header';
import { connect } from 'react-redux';

const Details = (props) => {

  const parametrosDaUrl = window.location.href;
  const res = parametrosDaUrl.split('/')
  const id = Number(res[4])



  const characterPicked = props.data.filter((item) => {
    return item.id === id
  }
  )

  console.log({ characterPicked })




  return (
    <div>
      <Header />
      <h1>Detalhes</h1>
      <pre>{characterPicked.props}</pre>
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



export default connect(mapStateToProps)(Details);


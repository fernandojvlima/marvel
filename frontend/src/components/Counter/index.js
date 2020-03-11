import React from 'react';
//o import do connect faz a conexão co componente com a store
import { connect } from 'react-redux'
import { increment, decrement } from '../../actions'


const Counter = ({ decrement, increment, count }) => {
  return (
    <div>
      Contador: {count}
      <button onClick={() => decrement(10)}>-</button>
      <button onClick={() => increment(20)}>+</button>
    </div>
  )
}

//O mapStateProps pega da store somente a fração de dados que vc precisa
const mapStateToProps = (state) => {
  return {
    count: state.count
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: (value) => dispatch(increment(value)),
    decrement: (value) => dispatch(decrement(value))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)
  (Counter);
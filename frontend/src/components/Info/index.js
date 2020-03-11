import React, { Component } from "react";
import { connect } from 'react-redux';
import { loadDataRequest } from '../../store/actions'

class Info extends Component {
  render() {
    return (
      <div>
        <p>Info{this.props.data}</p>
        {!this.props.isFetching && <button className="btn btn-secondary" onClick={() => this.props.loadData()}>Load</button>}
        {this.props.isFetching && <span>loading...</span>}

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isFetching: state.ip.isFetching,
    data: state.ip.data,
    error: state.ip.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadData: () => dispatch(loadDataRequest())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Info);
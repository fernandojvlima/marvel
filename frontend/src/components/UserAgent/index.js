import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadDataUARequest } from '../../store/actions/index'

class UserAgent extends Component {
  render() {
    return (
      <div>
        <p>User Agent {this.props.data}</p>
        {!this.props.isFetching && <button className="btn btn-secondary" onClick={() => this.props.loadData()}>load agent</button>}
        {this.props.isFetching && <span>loading...</span>}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isFetching: state.ua.isFetching,
    data: state.ua.data,
    error: state.ua.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadData: () => dispatch(loadDataUARequest())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserAgent);
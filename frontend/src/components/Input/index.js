import React from 'react';

const Input = (props) => {
  return (
    <div>
      {props.label && <label>{props.label}</label>}
      <input value={props.value} onChange={props.onChange} placeholder={props.placeholder} type={props.type || "text"} className="form-control" />
    </div>)
}

export default Input;
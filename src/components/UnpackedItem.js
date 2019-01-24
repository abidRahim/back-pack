import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleChange, handleDelete } from '../actions'


class UnpackedItem extends Component {
  render(){
    return (
      <div className="unpacked__item">
        <div class="todo-content">
          <input type = "checkbox" onChange = {()=> this.props.dispatch(handleChange(this.props.id))} checked = {this.props.data.done}></input>
          <p>{this.props.data.value}</p>
        </div>
        <button onClick = {()=> this.props.dispatch(handleDelete(this.props.id))}>delete</button>
      </div>
    )
  }
}
export default connect()(UnpackedItem);
import React, { Component } from 'react';
import AddItems from './components/AddItems';
import Unpacked from './components/Unpacked';
import Packed from './components/Packed';
import { connect } from 'react-redux';
import { searchUnpacked,searchPacked } from './actions'
import './App.css'

class App extends Component {
  constructor(){
    super();
    this.state = {
      searchValue: ""
    }
  }
  handleSearch = (e) => {
    this.setState({
      searchValue: e.target.value
    }, ()=> this.props.dispatch(searchUnpacked(this.state.searchValue)))
  }
  handleSearchPacked = (e) => {
    this.setState({
      searchValue: e.target.value
    }, ()=> this.props.dispatch(searchPacked(this.state.searchValue)))
  }
  render() {
    return (
      <div className="app-wrapper">                
        <div >
          <h1>Back Pack</h1>
          <AddItems />        
          <div className = "wrapper">
            <input type = "text" className = "search" placeholder = "Search from Unpacked List" onChange = {(e)=> this.handleSearch(e)}></input>
            <Unpacked />
          </div>
          <div className = "wrapper">
            <input type = "text" className = "search" placeholder = "Search from Packed List" onChange = {(e)=> this.handleSearchPacked(e)}></input> 
            <Packed />
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(App);
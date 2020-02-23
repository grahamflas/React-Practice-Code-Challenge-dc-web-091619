import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  constructor(){
    super()
    this.state = {
      allSushi: [],
      wallet: 100,
      servedSushi: []
    }
  }

  componentDidMount(){
    this.fetchSushi()
  }

  fetchSushi(){
    fetch(API)
      .then(response => response.json())
      .then(sushiData => this.setState({
        allSushi: sushiData
      }))
  }

  serveSushi(){
    let allSushiCopy = [...this.state.allSushi]
    let newServedSushi = 
  }

  render() {
    return ( 
      <div className="app">
        <SushiContainer  />
        <Table />
      </div>
    );
  }
}

export default App;
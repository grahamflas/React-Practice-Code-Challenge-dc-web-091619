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
      servedSushi: [], 
      eatenSushi: []
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
      }, () => this.serveSushi()))
  }

  serveSushi(){
    let allSushi = [...this.state.allSushi]
    let servedSushi = allSushi.splice(0,4)
    this.setState({
      allSushi, 
      servedSushi
    })
  }

  eatSushi = id => {
    console.log(`Eating sushi ${id}`)
  }

  render() {
    const {servedSushi} = this.state
    return ( 
      <div className="app">
        <SushiContainer  
          servedSushi={servedSushi}
          eatSushi={this.eatSushi}
        />
        <Table />
      </div>
    );
  }
}

export default App;
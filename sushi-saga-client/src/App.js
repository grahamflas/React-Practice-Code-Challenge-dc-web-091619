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
    let selectedSushi = this.state.servedSushi.filter(sushi => sushi.id === id)[0]
    let price = selectedSushi.price

    if (price < this.state.wallet ){
      this.setState({
        eatenSushi: [...this.state.eatenSushi, selectedSushi], 
        wallet: this.state.wallet - price
      })
    }
    
  }

  render() {
    const {servedSushi, wallet, eatenSushi} = this.state
    return ( 
      <div className="app">
        <SushiContainer  
          servedSushi={servedSushi}
          eatSushi={this.eatSushi}
          eatenSushi={eatenSushi}
        />
        <Table wallet={wallet}/>
      </div>
    );
  }
}

export default App;
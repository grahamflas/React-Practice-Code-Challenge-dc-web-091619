import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  constructor() {
    super()

    this.state = {
      allSushis: [],
      index: 0,
      currentSushis: [],
      eatenSushis: [],
      wallet: 100 
    }
  }

  componentDidMount() {
    fetch(API)
      .then( resp => resp.json() )
      .then( sushiData => {
        let newCurrentSushis = sushiData.slice(0, 4)
        this.setState( {
          allSushis: sushiData,
          currentSushis: newCurrentSushis
        } ) 
      } )
  }

  nextFour = () => {
    let newIndex = this.state.index + 4
    let newCurrentSushis = this.state.allSushis.slice(newIndex, newIndex + 4)
    this.setState( {
      index: newIndex,
      currentSushis: newCurrentSushis
    } )
  }

  eatenSushis = (sushiObj) => {
    console.log("Eating sushi...", sushiObj) 
    this.state.wallet - sushiObj.price > 0 ? (
      this.setState({
        eatenSushis: [...this.state.eatenSushis, sushiObj],
        wallet: this.state.wallet-sushiObj.price
      })
    ) : (
      alert("You're out of money!")
    )
  }

  render() {
    return (
      <div className="app">
        <SushiContainer
          currentSushis={this.state.currentSushis}
          nextFour={this.nextFour}
          eatenSushis = {this.eatenSushis}
          orderedSushis={this.state.eatenSushis}
          // orderSushis={this.orderSushis}
        />
        <Table 
          eatenSushis={this.state.eatenSushis}
          wallet={this.state.wallet}
        />
      </div>
    );
  }
}

export default App;
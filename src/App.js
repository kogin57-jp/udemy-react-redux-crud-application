import React, { Component } from 'react';

const App = () => (<Counter></Counter>)

class Counter extends Component{
  constructor(props){
    super(props)
    this.state = {count :0}
    console.log(this.state)
  }

  handlePlusButton = () => {
    this.setState({count:this.state.count + 1})
  }

  handleMinusButton = () => {
    this.setState({count:this.state.count - 1})
  }

  render(){
  return (
  <React.Fragment>
    counter:{this.state.count}
    <button onClick={this.handlePlusButton}>
      +1
    </button>
    <button onClick={this.handleMinusButton}>
      -1
    </button>
    </React.Fragment>
    )
  }
}

export default App;

import React from 'react'
require('./styles.scss')

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      guess: '',
      showGuess: [],
  }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)

  }

  handleChange(e) {
    this.setState({guess: e.target.value})
  }

  handleClick() {
    const {guess, showGuess} = this.state
    this.setState({showGuess: guess, guess: ''})
  }

  renderGuess() {
    return this.state.showGuess
  }

  render() {
    return (
      <div>
        <h1>Number Guesser</h1>
        <input type='number' value={this.state.guess} placeholder='Enter your Guess' onChange={this.handleChange}></input>
        <button onClick={this.handleClick}>Submit Guess</button>
        <ul>{this.renderGuess()}</ul>
      </div>
    )
  }
}

module.exports = App

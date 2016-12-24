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
      <div className='body'>
        <h1>Number Guesser</h1>
        <input className='user-guess'
          type='number'
          value={this.state.guess}
          placeholder='Enter Your Guess'
          onChange={this.handleChange}>
        </input>
        < br/>
        <button onClick={this.handleClick}>Submit Guess</button>
        <ul className='rendered-guess'>{this.renderGuess()}</ul>
      </div>
    )
  }
}

module.exports = App

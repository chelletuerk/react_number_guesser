import React from 'react'
import Controls from './Controls'
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
    let buttonDisabled = false
      if (!this.state.guess) {
      buttonDisabled = true
    }
    return (
      <div>
    <Controls
      buttonDisabled={buttonDisabled}
      guess={this.state.guess}
      handleChange={this.handleChange}
      handleClick={this.handleClick}/>
    <ul className='rendered-guess'>{this.renderGuess()}</ul>
    </div>

    )
  }
}

module.exports = App

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
    this.handleClear = this.handleClear.bind(this)

  }

// ComponentDidMount() {
//   randomNum() {
//     let generatedNum = randomNum()
//     let min = 1
//     let max = 100
//     return Math.floor(Math.random() * (max - min + 1)) + min
//     debugger
//   }
// }

  handleChange(e) {
    this.setState({guess: e.target.value})
  }

  handleClick() {
    const {guess, showGuess} = this.state
    this.setState({showGuess: guess, guess: ''})
  }

  handleClear() {
    const {showGuess} = this.state
    this.setState({showGuess: ''})
  }

  renderGuess() {
    return this.state.showGuess
  }

  disable() {

  }

  render() {
    const { guess } = this.state
    let buttonDisabled = false
      if (!guess || guess.length > 4) {
      buttonDisabled = true
      this.state.guess = ''
    }
    return (
      <div>
    <Controls
      buttonDisabled={buttonDisabled}
      guess={this.state.guess}
      handleChange={this.handleChange}
      handleClick={this.handleClick}
      handleClear={this.handleClear}/>
    <ul className='rendered-guess'>{this.renderGuess()}</ul>
    </div>

    )
  }
}

module.exports = App

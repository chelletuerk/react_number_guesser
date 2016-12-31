import React from 'react'
import Controls from './Controls'
require('./styles.scss')


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      guess: '',
      showGuess: null,
      hint: null,
      generatedNum: this.randomNum(),
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleClear = this.handleClear.bind(this)
    this.handleReset = this.handleReset.bind(this)
  }

  randomNum() {
    let min = 1
    let max = 100
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  handleChange(e) {
    let guess = e.target.value

    if (guess.length > 4) {
      guess = ''
    }

    if (Number.isNaN(+guess)) {
      alert('Sorry, that is not a number')
      guess = ''
    }

    if (guess >= 101 || guess <= -1) {
      alert('Sorry, you are outside the range')
      guess = ''
    }

    this.setState({guess: guess})
  }

  handleSubmit() {
    const {guess} = this.state
    this.setState({showGuess: guess, guess: '', hint: this.highOrLow()})
  }

  handleClear() {
    this.setState({guess: ''})
  }

  handleReset() {
    this.setState({showGuess: '', guess: '', hint: '', generatedNum: this.randomNum()})
  }

  renderGuess() {
    return this.state.showGuess
  }

  renderHint() {
    return this.state.hint
  }

  buttonDisabled() {
    return !this.state.guess;
  }

  highOrLow() {
    let { guess, generatedNum } = this.state
    if (guess > generatedNum)  {
      return 'Sorry, that guess is too high.  Try a lower number.'
    } else if ( guess < generatedNum) {
      return 'Sorry, that guess is too low.  Try a higher number'
    } else {
      return 'Winner winner, chicken dinner!'
    }
  }

  // notNumber() {
  //   if (isNaN(+guess)) {
  //     return 'Sorry, that is not a number'
  //   }
  // }

  render() {
    return (
      <div>
          <h1>Number Guesser in React</h1>
          <h2>Your last guess was...</h2>
        <ul className='rendered-guess'>
          <li className='shown-guess'>{this.renderGuess()}</li>
          <li>{this.renderHint()}</li>
        </ul>
        <Controls
          buttonDisabled={this.buttonDisabled()} //setting the buttonDisabled property to the return value of the buttonDisabled function
          highOrLow={this.highOrLow()}
          guess={this.state.guess}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          handleClear={this.handleClear}
          handleReset={this.handleReset}/>
      </div>
    )
  }
}

module.exports = App

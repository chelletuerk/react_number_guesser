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
    // console.log(this.state.generatedNum)

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

    // if (isNaN(+guess)) {
    //   this.setState({fuckedUp: true})
    // }
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
      return 'Sorry, that guess is too high'
    } else if ( guess < generatedNum) {
      return 'Sorry, that guess is too low'
    } else {
      return 'Winner winner, chicken dinner!'
    }
  }

  isNaN() {
    if (isNaN(+guess)) {
      return 'Sorry, that is not a number'
    } else {
      return 'Hmmm'
    }
  }

  render() {
    return (
      <div>
        <Controls
          buttonDisabled={this.buttonDisabled()} //setting the buttonDisabled property to the return value of the buttonDisabled function
          highOrLow={this.highOrLow()}
          guess={this.state.guess}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          handleClear={this.handleClear}
          handleReset={this.handleReset}/>
        <ul className='rendered-guess'>
          <li>{this.renderGuess()}</li>
          <li>{this.renderHint()}</li>
      </ul>
      </div>
    )
  }
}

module.exports = App

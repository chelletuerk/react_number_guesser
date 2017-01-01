import React from 'react'
import Controls from './Controls'
import UserRangeInputs from './UserRangeInputs'
require('./styles.scss')


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      guess: '',
      showGuess: null,
      hint: null,
      generatedNum: this.randomNum(),
      gameWon: false,
      min: '',
      max: '',
      showMinRange: null,
      showMaxRange: null,
    }
      console.log(this.state.generatedNum)

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleClear = this.handleClear.bind(this)
    this.handleReset = this.handleReset.bind(this)
    this.handleMinRange = this.handleMinRange.bind(this)
    this.handleMaxRange = this.handleMaxRange.bind(this)
    this.handleRangeSubmit = this.handleRangeSubmit.bind(this)
  }

  randomNum() {
    const min = 1
    const max = 100
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  handleChange(e) {
    let guess = e.target.value

    if (Number.isNaN(+guess)) {
      alert('Sorry, that is not a number')
      guess = ''
    }

    if (guess >= 101 || guess <= 0) {
      alert('Sorry, you are outside the range')
      guess = ''
    }

    this.setState({guess: guess})
  }

  handleSubmit() {
    const {guess} = this.state
    this.setState({showGuess: guess, guess: '', hint: this.highOrLow(), gameWon: true})

    //   if (guess === generatedNum) {
    //     this.setState({gameWon: true})
    // }
  }

  handleClear() {
    this.setState({ guess: '' })
  }

  handleReset() {
    this.setState({ showGuess: '', guess: '', hint: '', generatedNum: this.randomNum(), gameWon: false})
  }

  handleMinRange(e) {
    let minRange = e.target.value
    this.setState({min: minRange})
  }

  handleMaxRange(e) {
    let maxRange = e.target.value
    this.setState({max: maxRange})
  }

  handleRangeSubmit() {
    let { min, max } = this.state
    let minn = min
    let maxx = max
    let newNum = Math.floor(Math.random() * (maxx - minn + 1)) + minn
    this.setState({ showMinRange: min, showMaxRange: max, generatedNum: newNum, gameWon: true })
    debugger
  }

  // rangeNum() {
  //   let minn =
  //   let maxx =
  //   debugger
  //   Math.floor(Math.random() * (maxx - minn + 1)) + minn
  // }


  renderGuess() {
    return this.state.showGuess
  }

  renderMinRange() {
    return this.state.showMinRange
  }

  renderMaxRange() {
    return this.state.showMaxRange
  }

  renderHint() {
    return this.state.hint
  }

  buttonDisabled() {
    return !this.state.guess
  }

  resetDisabled() {
    return !this.state.gameWon
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
    // this.win()
  }

  // win() {
  //   let {guess, generatedNum } = this.state
  //   if (guess === generatedNum) {
  //     this.setState ({gameWon: true})
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
          buttonDisabled={this.buttonDisabled()}
          resetDisabled={this.resetDisabled()}
          highOrLow={this.highOrLow()}
          guess={this.state.guess}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          handleClear={this.handleClear}
          handleReset={this.handleReset}/>
        <UserRangeInputs
          handleMinRange={this.handleMinRange}
          handleMaxRange={this.handleMaxRange}
          handleRangeSubmit={this.handleRangeSubmit}/>
            <li className='range'>
              <span className='min'>Min:  {this.renderMinRange()}</span>
              <span>Max:  {this.renderMaxRange()}</span>
            </li>
      </div>
    )
  }
}

module.exports = App

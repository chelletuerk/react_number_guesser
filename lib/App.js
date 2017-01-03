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
      min: 1,
      max: 100,
      generatedNum: null,
      gameWon: false,
      showMinRange: null,
      showMaxRange: null,
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleClear = this.handleClear.bind(this)
    this.handleReset = this.handleReset.bind(this)
    this.handleMinRange = this.handleMinRange.bind(this)
    this.handleMaxRange = this.handleMaxRange.bind(this)
    this.handleRangeSubmit = this.handleRangeSubmit.bind(this)
  }
  componentDidMount() {
    let { min, max } = this.state
    this.setState({
      generatedNum: this.randomNum(),
      showMinRange: min,
      showMaxRange: max,
     })
  }

  randomNum() {
    return Math.floor(Math.random() * (this.state.max - this.state.min + 1)) + this.state.min
  }

  handleChange(e) {
    let guess = e.target.value
    if (Number.isNaN(+guess)) {
      alert('Sorry, that is not a number')
      guess = ''
    }
    this.setState({guess: +guess})
  }

  outsideRange() {
    let { guess } = this.state
    if (+guess > this.state.max || +guess < this.state.min) {
      alert('Sorry, you are outside the range')
      guess = ''
    }
  }

  handleSubmit() {
    this.outsideRange()
    const { guess, min, max } = this.state
    this.setState({
      showGuess: guess,
      guess: '',
      hint: this.highOrLow(),
      gameWon: true}, () => {
        if (this.state.hint === 'Winner winner, chicken dinner!') {
          this.setState({
            min: min - 10,
            max: max + 10,
          }, () => {
             this.setState({
               generatedNum: this.randomNum(),
             }, () => {
               this.setState({
                    showMinRange: this.state.min,
                    showMaxRange: this.state.max,
              })
            })
         })
       }
    })
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

  handleRangeSubmit(minMax) {
    let { min, max } = this.state
    this.setState({
      showMinRange: minMax.min,
      showMaxRange: minMax.max,
      gameWon: true,
      min: +minMax.min,
      max: +minMax.max,
    }, () => {
      this.setState({ generatedNum: this.randomNum() })
    })
  }

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
  }

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

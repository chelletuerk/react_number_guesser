import React, {Component} from 'react'

export default class UserRangeInputs extends React.Component {
  constructor() {
    super()
    this.state = {
      min: '',
      max: '',
    }
  }
  render() {
    const { handleMinRange, handleMaxRange, handleRangeSubmit } = this.props
    return (
      <div>
        <input
          id='minInput'
          className='min'
          type='number'
          value={this.state.min}
          placeholder='Enter Min'
          onChange={(e) => {
            this.setState({ min: +e.target.value })
          }}>
        </input>
        <input
          id='maxInput'
          className='max'
          type='number'
          value={this.state.max}
          placeholder='Enter Max'
          onChange={(e) => {
            this.setState({ max: +e.target.value })
          }}>
        </input>
        <button
          className='rangeBtn'
          onClick={() => {
            handleRangeSubmit(this.state)
            this.setState({ min: '', max: '' })}}>Enter Range
        </button>
      </div>
    )
  }
}

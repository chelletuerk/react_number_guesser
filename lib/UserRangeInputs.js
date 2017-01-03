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
    const { handleMinRange, handleMaxRange, handleRangeSubmit, min, max } = this.props
    return (
      <div>
        <input
          id='minInput'
          className='min'
          type='number'
          value={min}
          placeholder='Enter Min'
          onChange={handleMinRange}>
        </input>
        <input
          id='maxInput'
          className='max'
          type='number'
          value={max}
          placeholder='Enter Max'
          onChange={handleMaxRange}>
        </input>
        <button
          className='rangeBtn'
          onClick={handleRangeSubmit}>Enter Range
        </button>
      </div>
    )
  }
}

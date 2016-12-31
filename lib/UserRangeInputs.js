import React, {Component} from 'react'

export default class UserRangeInputs extends React.Component {
  render() {
    const { handleMinRange, handleMaxRange,handleRangeSubmit, min, max } = this.props
    return (
      <div>
        <input
          className='min'
          type='number'
          value={min}
          placeholder='Enter Min'
          onChange={handleMinRange}>
        </input>
        <input
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

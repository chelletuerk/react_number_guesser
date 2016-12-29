import React, { Component } from 'react'

export default class Controls extends React.Component {
  render() {
    const { guess, handleChange, handleSubmit, buttonDisabled, handleClear, handleReset } = this.props
    return (
        <div className='body'>
          <input className='user-guess'
            type='number'
            value={guess}
            placeholder='Your best guess'
            onChange={handleChange}>
          </input>
          < br/>
          <button
            className='submitBtn'
            onClick={handleSubmit}
            disabled={buttonDisabled}>Guess
          </button>
          <button
            className='clearBtn'
            onClick={handleClear}
            disabled={buttonDisabled}>Clear
          </button>
          <br/>
          <button
            className='resetBtn'
            onClick={handleReset}>Reset Game
          </button>
        </div>
    )
  }
}

import React, { Component } from 'react'

export default class Controls extends React.Component {
  render() {
    const { guess, handleChange, handleClick, buttonDisabled, handleClear } = this.props
    return (
        <div className='body'>
          <h1>Number Guesser</h1>
          <input className='user-guess'
            type='number'
            value={guess}
            placeholder='Enter Your Guess'
            onChange={handleChange}>
          </input>
          < br/>
          <button
            className='submitBtn'
            onClick={handleClick}
            disabled={buttonDisabled}>Submit Guess
          </button>
          <br />
          <button
            className='clearBtn'
            onClick={handleClear}>Clear
          </button>
        </div>
    )
  }
}

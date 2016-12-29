import React, { Component } from 'react'

export default class Controls extends React.Component {
  render() {
    const { guess, handleChange, handleSubmit, buttonDisabled, handleClear } = this.props
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
            onClick={handleSubmit}
            disabled={buttonDisabled}>Submit Guess
          </button>
          <br />
          <button
            className='clearBtn'
            onClick={handleClear}
            disabled={buttonDisabled}>Clear
          </button>
        </div>
    )
  }
}

import React, { Component } from 'react'
import ClearButton from './ClearButton'
import SubmitButton from './SubmitButton'
import ResetButton from './ResetButton'

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
          <SubmitButton
            handleSubmit={handleSubmit}
            disabled={buttonDisabled}
          />
          <ClearButton
            handleClear={handleClear}
            disabled={buttonDisabled}
          />
          <br/>
          <ResetButton
            handleReset={handleReset}
          />
        </div>
    )
  }
}

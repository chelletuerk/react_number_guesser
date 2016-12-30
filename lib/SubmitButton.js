import React, { Component } from 'react'

export default class SubmitButton extends React.Component {
  render() {
    const { handleSubmit, buttonDisabled } = this.props
    return(
      <div className='button'>
        <button
          className='submitBtn'
          onClick={handleSubmit}
          disabled={buttonDisabled}>Guess
        </button>
      </div>
    )
  }
}

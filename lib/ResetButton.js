import React, {Component} from 'react'

export default class ResetButton extends React.Component {
  render() {
    const { handleReset, resetDisabled } = this.props
    return(
      <div>
        <button
          className='resetBtn'
          onClick={handleReset}
          disabled={resetDisabled}>Reset Game
        </button>
      </div>
    )
  }
}

import React, {Component} from 'react'

export default class ResetButton extends React.Component {
  render() {
    const { handleReset } = this.props
    return(
      <div>
        <button
          className='resetBtn'
          onClick={handleReset}>Reset Game
        </button>
      </div>
    )
  }
}
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

class Square extends React.Component {
  render() {
    return (
      // Notice the onClick will trigger the onClick on the Board component
      // Which then triggers the handleClick()
      // Also the {this.props.value} fetchs the value from the property passed down
      <button
        className='square'
        onClick={() => this.props.onClick()}
        onDoubleClick={() => console.log('Double')}
      >
        {this.props.value}
      </button>
    )
  }
}

class Board extends React.Component {
  // Initialize the state
  constructor(props) {
    super(props)
    this.state = {
      squares: [],
    }
  }

  handleClick(i) {
    const squares = this.state.squares.slice()
    squares[i] = 'X'
    this.setState({ squares: squares })
  }

  renderSquare(i) {
    // Passing values via Properties
    // Diagram: Board (handleClick() & value) -> Square  -> onClick & value
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    )
  }

  render() {
    const status = 'Next player: X'

    return (
      <div>
        <div className='status'>{status}</div>
        <div className='board-row'>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className='board-row'>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className='board-row'>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    )
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className='game'>
        <div className='game-board'>
          <Board />
        </div>
        <div className='game-info'>
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    )
  }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Game />)

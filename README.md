# How to run

1. run 'npm start'
2. Go to localhost:3000

# Key Take Aways

1. Pass data into Components using properties:
   Ex: return <Square valuePassed={i} />

2. Get values passed into components using 'this.props.XYZ'
   Ex: {this.state.value}

3. Set state on Child Components by:
   a. Initlizing state in the constructor
   Ex: this.state = { value: null }

   b. Modifying state using 'this.setState()'
   Ex: this.setState({ value: 'X' })}

4. You can refer back to the parent component properties using this.props.XYZ
   Ex:
   On Square Component,
   onClick={() => this.props.onClick()}>
   This will fetch the onClick on the Board Component
   <Square
   value={this.state.squares[i]}
   onClick={() => this.handleClick(i)}
   />

5. You can 'move' the state management to the Parent component (i.e Board) instead of keeping track of each Squares state inidivdually. Minimizes bugs

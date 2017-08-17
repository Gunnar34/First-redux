import React from "react";
import { connect } from "react-redux";

class ShowComponent extends React.Component {
  render() {
    return (
      <div>
        <p>Count: {this.props.count}</p>
        <h1>Hello World</h1>
        <button onClick={() => this.props.dispatch({ type: 'INCREMENT'})}>increment</button>
        <button onClick={() => this.props.dispatch({ type: 'DECREMENT'})}>decrement</button>
      </div>
    )
  }
}

const mapState = state => state;

export default connect(mapState)(ShowComponent);

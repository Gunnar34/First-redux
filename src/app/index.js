import React from "react";
import { createStore } from "redux"
import { Provider } from "react-redux"
import ReactDOM from "react-dom";
import { render } from "react-dom";
import ShowComponent from "./ShowComponent";

const initialState = {
	count: 0
}

const counterReducer = (state = initialState, action) => {
	switch(action.type) {
		case 'INCREMENT':
			return {
				...state,
				count: state.count + 1
			}
		case 'DECREMENT':
			return {
				count: state.count - 1
			}
		default:
			return state;
	}
}

const store = createStore(counterReducer);

store.subscribe(() => console.log(store.getState()))

class App extends React.Component {
  render() {
    return (
      <div className="App">
				<Provider store={store}>
					<ShowComponent />
				</Provider>
      </div>
    );
  }
}


render( < App / > , window.document.getElementById("app"));

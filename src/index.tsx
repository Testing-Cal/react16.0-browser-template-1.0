import React, { Component } from 'react';
import { render } from 'react-dom';
import Home from './home';
import './style.css';

type AppState = {
    name: string
}

type AppProp = {

}

class App extends Component<AppProp,AppState> {
  constructor(props:AppProp) {
    super(props);
    this.state = {
      name: 'Welcome to Integrated Digital Platform'
    };
  }

  render() {
    return (
      <div>
        <Home name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));

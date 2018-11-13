import React, { Component } from 'react';
import { Header } from './Header';
import { DisplayCardsWrapper } from './DisplayCardsWrapper';

import '../styles/App.scss';

const initialState = { outs: null };
class App extends Component {
  state = initialState;
  render() {
    return (
      <div className="App">
        <Header />
        <hr />
        <DisplayCardsWrapper usersOuts={5} />
      </div>
    );
  }
}

export default App;

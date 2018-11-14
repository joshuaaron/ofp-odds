import React, { Component } from 'react';
import { Header } from './Header';
import { DisplayCardsWrapper } from './DisplayCardsWrapper';
import { InputField } from './InputField';
import '../styles/App.scss';

const initialState = { usersOuts: '' };
class App extends Component {
  state = initialState;

  handleInputChange = event => {
    this.setState({ usersOuts: event.target.value });
  }

  render() {
    const { usersOuts } = this.state;
    return (
      <div className="app-container">
        <Header />
        <InputField outs={usersOuts} onChange={this.handleInputChange} />
        <DisplayCardsWrapper usersOuts={usersOuts} />
      </div>
    );
  }
}

export default App;

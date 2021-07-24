import React from 'react';
import Header from '../Header/Header';
import Results from '../Results/Results';
import SearchBox from '../Search/SearchBox';
import './App.css';

const name = require('@rstacruz/startup-name-generator');

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      headerText: 'Name It!',
      headerExpanded: true,
      suggestedNames: [],
    };
  }

  InputChangeHandler = (inputText) => {
    this.setState({
      headerExpanded: !inputText,
      suggestedNames: inputText ? name(inputText) : [],
    });
  };

  render() {
    return (
      <div>
        <Header
          headerExpanded={this.state.headerExpanded}
          headTitle={this.state.headerText}
        />
        <SearchBox onInputChange={this.InputChangeHandler} />
        <Results suggestedNames={this.state.suggestedNames} />
      </div>
    );
  }
}

export default App;

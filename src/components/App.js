import React, { Component } from 'react';
import '../styles/App.css';
import Search from './Search';
import Header from './Header';
import store from '../store';
import { Provider } from 'react-redux'

class App extends Component {
  render() {
    return (
      <Provider store={store.configure()}>
        <div className="App">
            <Header />
            <Search />
        </div>
      </Provider>
    );
  }
}

export default App;

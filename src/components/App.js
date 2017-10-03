import React, { Component } from 'react';
import '../styles/App.css';
import '../styles/normalize.css';
import Search from './Search';
import Header from './Header';
import ScrollTop from './ScrollTop';
import AdditionalInfo from './AdditionalInfo';
import { persistStore } from 'redux-persist';
import localForage from 'localforage'
import { store } from '../store/configureStore';

persistStore(store)

class App extends Component {

  componentDidMount() {
    persistStore(store,
    {
      storage: localForage,
    },
    )
  }

  render() {
    return (
            <div className="App">
                <Header />
                <Search />
                <AdditionalInfo />
                <ScrollTop />
            </div>
    )
  }
}

export default App;

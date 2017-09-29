import React, { Component } from 'react';
import '../styles/App.css';
import Search from './Search';
import Header from './Header';
import ScrollTop from './ScrollTop';
import AdditionalInfo from './AdditionalInfo';
import { persistStore } from 'redux-persist';
import localForage from 'localforage'
import configureStore from '../store/configureStore';
import { Provider } from 'react-redux';


const store = configureStore();
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
        <Provider store={store}>
            <div className="App">
                <Header />
                <Search />
                <AdditionalInfo />
                <ScrollTop />
            </div>
        </Provider>
    )
  }
}

export default App;

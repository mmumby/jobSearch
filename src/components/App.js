import React, { Component } from 'react';
import '../styles/App.css';
import Search from './Search';
import Header from './Header';
import ScrollTop from './ScrollTop';
import AdditionalInfo from './AdditionalInfo';
import { persistStore } from 'redux-persist';
import { asyncSessionStorage } from 'redux-persist/storages'
import configureStore from '../store/configureStore';
import { Provider } from 'react-redux';


const store = configureStore();

class App extends Component {
constructor(){
    super()
    this.state ={
      isReady: false,
    }
  }

  componentDidMount() {
    persistStore(store,
    {
      storage: asyncSessionStorage,
    },
    () => {
      this.setState({isReady: true})
      }
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

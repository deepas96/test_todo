/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import Routes from './app/Routes'
import {Provider} from 'react-redux'
import store from './app/store/store'
 
class App extends Component {
  state={
    todo:[] ,
  }

  render() {
    return (  
      <Provider store = {store}>
        <Routes/>      
      </Provider>        
    );
  }
}

export default App





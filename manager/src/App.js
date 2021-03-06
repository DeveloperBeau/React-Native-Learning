/* @flow */
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

export default class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyCO1T2AlhhtY9UTabGNgJ55En-09mA5sjo',
      authDomain: 'manager-895ea.firebaseapp.com',
      databaseURL: 'https://manager-895ea.firebaseio.com',
      projectId: 'manager-895ea',
      storageBucket: 'manager-895ea.appspot.com',
      messagingSenderId: '433158965003'
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';

export default class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyCO1T2AlhhtY9UTabGNgJ55En-09mA5sjo",
      authDomain: "manager-895ea.firebaseapp.com",
      databaseURL: "https://manager-895ea.firebaseio.com",
      projectId: "manager-895ea",
      storageBucket: "",
      messagingSenderId: "433158965003"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>Hello</Text>
        </View>
      </Provider>
    );
  }
}

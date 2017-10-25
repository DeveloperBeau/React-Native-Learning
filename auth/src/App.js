import React, { Component } from 'react';
import {
  View
} from 'react-native';
import firebase from 'firebase';

import { Header, Button, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

export default class App extends Component {
  state = { loggedIn: null }


  componentWillMount() {
    firebase.initializeApp({
    apiKey: 'AIzaSyA2xAnIPvlOeZKHEbKmbx5YpbPGxxIlyAE',
    authDomain: 'auth-a3fd9.firebaseapp.com',
    databaseURL: 'https://auth-a3fd9.firebaseio.com',
    projectId: 'auth-a3fd9',
    storageBucket: 'auth-a3fd9.appspot.com',
    messagingSenderId: '343371735483'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
      return (
        <CardSection>
          <Button onPress={() => firebase.auth().signOut()}>
            Log Out
          </Button>
        </CardSection>
      );
        case false:
        return <LoginForm />;
      default:
        return (
          <CardSection>
            <Spinner />
          </CardSection>
        );
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

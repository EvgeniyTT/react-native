import React, { Component } from 'react';
import { Text, Platform, View, StyleSheet } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

  initFirebase = () => {
    console.log('BABABAB')
    console.log('firebase.apps.length: ', firebase.apps.length)
    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: "AIzaSyBvRVflt3bq6qnXaddTZRuUCOCGlBnRGVo",
        authDomain: "albums-auth-6437a.firebaseapp.com",
        databaseURL: "https://albums-auth-6437a.firebaseio.com",
        projectId: "albums-auth-6437a",
        storageBucket: "albums-auth-6437a.appspot.com",
        messagingSenderId: "759591123631"
      });
    }
  }

  componentWillMount() {
    this.initFirebase();
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log('user: ', user);
      }
    })
  }

  componentWillReceiveProps() {
    console.log('RECEIVE')
  }

  render() {
    this.initFirebase();
    return (
      <View>
        <Header headerText='Auth' />
        <LoginForm initFirebase={this.initFirebase}/>
      </View>
    );
  }
}

export default App;

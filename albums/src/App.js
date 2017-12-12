import React, { Component } from 'react';
import { Text, Platform, View, StyleSheet } from 'react-native';
import Header from './components/header';
import AlbumList from './components/AlbumList';

class App extends Component {
  render() {
    return (
      <View>
        <Header headerText='Albums' />
        <AlbumList />
      </View>
    );
  }
}

export default App;

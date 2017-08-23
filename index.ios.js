// index.ios.js for IOS

//import libraries
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

//Create a component
const App = () => (
    <View style={{ flex: 1 }}>
      <Header headerText={'Album'} />
      <AlbumList />
    </View>
  );


//Renderit to device
AppRegistry.registerComponent('album', () => App);

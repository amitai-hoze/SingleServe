/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableHighlight,
  ScrollView
} from 'react-native';

import CinemaPreview from './App/cinema'
import EducationPreview from './App/education'
import FinancePreview from './App/finance'
import NavigationBar from 'react-native-navbar';

var AppReloader = require('NativeModules').AppReloader;

class SingleServe extends Component {

  handleSubmit() {
    AppReloader.reloadAppWithURLString("http://localhost:8081/index.ios.bundle",
                                     "ShmerlingtonHotel",
                                     "ShmerlingtonHotel");
  }

  render() {
    var titleConfig = {
  title: 'Apps Around You'
};
var refreshButton = {
    title: 'Refresh',
    handler: () => {
        this.fetchData();
    }
};
var aboutButton = {
    title: 'About',
    handler: () => {
        this.setState({modalOpen: true});
    }
};
    return (
      <View style={styles.container}>
      <NavigationBar title={titleConfig} rightButton={aboutButton} leftButton={refreshButton}/>
      <View style={styles.appBar} />
      <ScrollView style={styles.scrollview}>
          <View style={styles.insideScrollview}>
            <CinemaPreview/>
            <View style={styles.seperator} />
            <EducationPreview/>
            <View style={styles.seperator} />
            <FinancePreview/>
            <View style={styles.seperator} />
          </View>
      </ScrollView>
      </View>
    );
  }
}

const PURPLE = '#5C069A';
const VERY_LIGHT_GREY = '#f5f5f5';
const LIGHT_GREY = '#cccccc';
const GREY = '#888';
const MID_GREY = '#222';
const DARK_GREY = '#444';

const Colors = {
  tintColor: PURPLE,
  purple: PURPLE,
  veryLightGrey: VERY_LIGHT_GREY,
  lightGrey: LIGHT_GREY,
  grey: GREY,
  midGrey: MID_GREY,
  darkGrey: DARK_GREY,
};

const styles = StyleSheet.create({
  container:{
      flex: 1
  },
  appBar: {
    // position: 'absolute',
        left: 0,
        right: 0,
        top: 50,
        bottom: 0,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
      // flex: 1,
      backgroundColor: '#FFF'
  },
  scrollview: {
      flex: 1,
      flexDirection: 'column'
  },
  insideScrollview: {
      flex: 1
  },
  seperator: {
    marginRight: 4,
    marginLeft:4,
    marginBottom: 40,
    height: 1,
    backgroundColor: '#bebebe'
  }
});

AppRegistry.registerComponent('SingleServe', () => SingleServe);

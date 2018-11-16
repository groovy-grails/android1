/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, WebView} from 'react-native';

export default class App extends Component<Props> {
  render() {
    return (
      <WebView
        source={{uri: 'http://b.g4f.cn/login/auth'}}
        style={{marginTop: 20}}
      />
    );
  }
}


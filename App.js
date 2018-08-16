/**
 * Powerball React Native App
 * https://github.com/mdmush/porwerball-react-native
 *
 * By: Mohd Mushfique
 * Date: 17th August 2018
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Router, Actions, Scene, ActionConst } from 'react-native-router-flux';

//Scenes
import Main from './components/main';
import Powerball from './components/powerball';
import Result from './components/result';

const scenes = Actions.create(
  <Scene key="Root" hideNavBar hideTabBar>
    <Scene key="main" component={Main} initial />
    <Scene key="powerball" component={Powerball} type={ActionConst.REPLACE} />
    <Scene key="result" component={Result} />
  </Scene>
);

export default class App extends Component<Props> {
  render() {
    return (
      <Router
        scenes={scenes} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

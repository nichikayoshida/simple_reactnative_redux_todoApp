/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { StyleSheet, View } from 'react-native';
import AddToDo from './containers/AddTodo';
import VisibleTodoList from './containers/VisibleTodoList';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flexDirection: 'column',
    padding: 20,
  },
});

const App = () => (
  <View style={styles.container}>
    <VisibleTodoList />
    <AddToDo />
  </View>
);

export default App;

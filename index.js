/** @format */
import React from 'react';
import { AppRegistry } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import { name as appName } from './app.json';
import { addTodo } from './actions';
import todoApp from './reducers';

const store = createStore(todoApp);

console.log(store.getState());

store.dispatch(addTodo('default1'));
store.dispatch(addTodo('default2'));

// unsubScribe();

const Main = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => Main);

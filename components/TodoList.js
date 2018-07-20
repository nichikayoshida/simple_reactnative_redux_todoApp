import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FlatList, StyleSheet } from 'react-native';
import Todo from './Todo';

const styles = StyleSheet.create({
  flatlist: {
    padding: 20,
    alignSelf: 'stretch',
    backgroundColor: '#eeeeee',
  },
});

export default class TodoList extends Component {
  static propTypes = {
    todos: PropTypes.arrayOf(Todo).isRequired,
  };

  renderItem = ({ item }) => <Todo text={item.text} />;

  render() {
    const { todos } = this.props;
    return (
      <FlatList
        data={todos}
        renderItem={this.renderItem}
        keyExtractor={(item, index) => index.toString()}
        style={styles.flatlist}
      />
    );
  }
}

import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';

const Todo = ({ text }) => (
  <Text style={{ textAlign: 'center' }}>
    {text}
  </Text>
);

Todo.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Todo;

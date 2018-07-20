import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-native';
import PropTypes from 'prop-types';
import { addTodo } from '../actions';

const AddToDo = ({ dispatch }) => <Button title="Press" onPress={() => dispatch(addTodo('aa'))} />;

export default connect()(AddToDo);

AddToDo.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

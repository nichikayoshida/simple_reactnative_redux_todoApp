import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, TextInput, View } from 'react-native';
import PropTypes from 'prop-types';
import { addTodo, refreshTextInput, clearTextInput } from '../actions';

class AddToDo extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    textInput: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    console.log('AddToDo is constructed');
  }

  render() {
    const { dispatch, textInput } = this.props;
    return (
      <View style={{ flexDirection: 'row', marginTop: 10 }}>
        <TextInput
          style={{ flex: 1, backgroundColor: '#f1f1f1' }}
          onChangeText={(text) => {
            dispatch(refreshTextInput(text));
          }}
          value={textInput}
        />
        <Button
          title="add"
          onPress={() => {
            dispatch(addTodo(textInput));
            dispatch(clearTextInput());
          }}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  textInput: state.textInput,
});

export default connect(mapStateToProps)(AddToDo);

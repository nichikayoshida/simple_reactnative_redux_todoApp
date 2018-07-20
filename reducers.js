import { combineReducers } from 'redux';
import {
  VisibilityFilters,
  SET_VISIBILITY_FILTER,
  ADD_TODO,
  TOGGLE_TODO,
  REFRESH_TEXTINPUT,
  CLEAR_TEXTINPUT,
} from './actions';

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return action.text !== ''
        ? [
          ...state,
          {
            text: action.text,
            completed: false,
          },
        ]
        : [...state];
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === action.index) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
    default:
      return state;
  }
}

function visibilityFilter(state = VisibilityFilters.SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

function textInput(state = '', action) {
  switch (action.type) {
    case REFRESH_TEXTINPUT:
      return action.text;
    case CLEAR_TEXTINPUT:
      return '';
    default:
      return state;
  }
}

const todoApp = combineReducers({
  visibilityFilter,
  todos,
  textInput,
});

export default todoApp;

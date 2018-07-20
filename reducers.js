import { combineReducers } from 'redux';
import {
  VisibilityFilters, SET_VISIBILITY_FILTER, ADD_TODO, TOGGLE_TODO,
} from './actions';

// const initialState = {
//   visibiltyFilter: VisibilityFilters.SHOW_ALL,
//   todos: [],
// };

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false,
        },
      ];
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

// function todoApp(state = initialState, action) {
//   switch (action.type) {
//     case SET_VISIBILITY_FILTER:
//       return {
//         ...state,
//         visibiltyFilter: visibilityFilter(state, action),
//       };
//     case ADD_TODO:
//     case TOGGLE_TODO:
//       return {
//         ...state,
//         todos: todos(state, action),
//       };
//     default:
//       return state;
//   }
// }
//

// function todoApp(state = {}, action) {
//   return {
//     visibiltyFilter: visibilityFilter(state.visibiltyFilter, action),
//     todos: todos(state.todos, action),
//   };
// }
//

// 多分、combineReducersを使うためには、stateの各キー名とそのreducerを同名にする必要がある
const todoApp = combineReducers({
  visibilityFilter,
  todos,
});

export default todoApp;

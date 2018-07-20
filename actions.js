/*
 * action types
 */
export const ADD_TODO = 'ADD_TODO';
export const REFRESH_TEXTINPUT = 'REFRESH_TEXTINPUT';
export const CLEAR_TEXTINPUT = 'CLEAR_TEXTINPUT';

/*
 * action creators
 */
export function addTodo(text) {
  return { type: ADD_TODO, text };
}

export function refreshTextInput(text) {
  return { type: REFRESH_TEXTINPUT, text };
}

export function clearTextInput() {
  return { type: CLEAR_TEXTINPUT };
}

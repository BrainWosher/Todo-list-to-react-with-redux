import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import reducer from './reducers';
import todos from './todos';
import App from './App';
import { addTodo, deleteTodo, toggleTodo, editTodo } from './actions';

const store = createStore(reducer, todos);

ReactDOM.render(<App store={store} />, document.getElementById('root'));
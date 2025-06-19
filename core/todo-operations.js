'use strict';

const crypto = require('node:crypto');

const createTodo = (todos, title) => [
    ...todos,
    {
      id: crypto.randomUUID(),
      title,
      completed: false,
      createdAt: new Date().toISOString(),
    },
  ];

const toggleTodo = (todos, id) => todos.map((todo) => {
    if (todo.id === id) {
      return {
        ...todo,
        completed: !todo.completed,
      };
    }
    return todo;
  });

const filterTodos = (todos, filters = {}) => todos.filter((todo) => {
    const titleMatch =
      filters.title === undefined ||
      todo.title.toLowerCase().includes(filters.title.toLowerCase());
    const completedMatch =
      filters.completed === undefined || todo.completed === filters.completed;
    return completedMatch && titleMatch;
  });

const deleteTodo = (todos, id) => todos.filter((todo) => todo.id !== id);

module.exports = {
  createTodo,
  toggleTodo,
  filterTodos,
  deleteTodo,
};

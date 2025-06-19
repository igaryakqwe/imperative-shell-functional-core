const createTodo = (todos, title) => {
  return [
    ...todos,
    {
      id: crypto.randomUUID(),
      title,
      completed: false,
      createdAt: new Date().toISOString(),
    }
  ]
}

const toggleTodo = (todos, id) => {
  return todos.map((todo) => {
    if (todo.id === id) {
      return {
        ...todo,
        completed: !todo.completed,
      }
    }
    return todo;
  })
}

const filterTodos = (todos, filters = {}) => {
  return todos.filter(todo => {
    const titleMatch =
      !filters.title ||
      todo.title.toLowerCase().includes(filters.title.toLowerCase());
    const completedMatch =
      !filters.completed || todo.completed === filters.completed;
    return completedMatch && titleMatch;
  });
}

const deleteTodo = (todos, id) => {
  return todos.filter(todo => todo.id !== id);
}

module.exports = {
  createTodo,
  toggleTodo,
  filterTodos,
  deleteTodo,
}
const Fastify = require('fastify');
const { readTodos, saveTodos } = require('./todo-storage.js');
const { createTodo, filterTodos, toggleTodo, deleteTodo } = require('../core/todo-operations.js');

const fastify = Fastify({
  logger: true,
});

fastify.get('/todos', async (request, reply) => {
  const todos = await readTodos();
  const filters = {
    title: request.query.title,
    completed: request.query.completed
  }

  const result = filterTodos(todos, filters);
  reply.send(result);
});

fastify.post('/todos', async (request, reply) => {
  const todos = await readTodos();
  const title = request.body.title;
  const updatedTodos = createTodo(todos, title);

  await saveTodos(updatedTodos);
  reply.send(updatedTodos);
});

fastify.patch('/todos/:id/toggle', async (request, reply) => {
  const todos = await readTodos();
  const id = request.params.id;
  const updatedTodos = toggleTodo(todos, id);

  await saveTodos(updatedTodos);
  reply.send(updatedTodos);
});

fastify.delete('/todos/:id', async (request, reply) => {
  const todos = await readTodos();
  const id = request.params.id;
  const updatedTodos = deleteTodo(todos, id);

  await saveTodos(updatedTodos);
  reply.send(updatedTodos);
});

module.exports = fastify;
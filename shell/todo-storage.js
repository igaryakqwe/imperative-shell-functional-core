const fs = require('fs/promises');
const path = require('path');

const DB_PATH = path.resolve('./db/todos.json');

const readTodos = async () => {
  const data = await fs.readFile(DB_PATH, 'utf8');
  return JSON.parse(data);
}

const saveTodos = async (todos) => {
  await fs.writeFile(DB_PATH, JSON.stringify(todos, null, 2));
}

module.exports = {
  readTodos,
  saveTodos
}
# Todo app with Functional-core, Imperative-shell architecture

## Setup

```bash
npm install
npm start
```

## Endpoints

### GET /todos
- Returns all todos

Search params -
- completed: boolean
- title: string

### POST /todos
- Creates a new todo

### PATCH /todos/:id/toggle
- Toggles a todo

### DELETE /todos/:id
- Deletes a todo
import { TodoItem } from "./TodoItem"
import PropTypes from "prop-types";
export function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul className="list">
      {todos.length === 0 && "No Todos"}
      {todos.map(todo => {
        return (
          <TodoItem
            {...todo}
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        )
      })}
    </ul>
  )
}


TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired, // Ensure todos is an array of objects with specific shape and is required
  toggleTodo: PropTypes.func.isRequired, // Ensure toggleTodo is a function and is required
  deleteTodo: PropTypes.func.isRequired, // Ensure deleteTodo is a function and is required
};
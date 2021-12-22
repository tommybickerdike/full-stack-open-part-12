import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos, refreshTodos }) => {
  return (
    <>
      {todos.map(todo => {
				return <Todo key={todo.id} todo={todo} refreshTodos={refreshTodos}/>
      }).reduce((acc, cur) => [...acc, <hr />, cur], [])}
    </>
  )
}

export default TodoList

import React from 'react';
import axios from '../util/apiClient';


const Todo = ({ todo, refreshTodos }) => {

	const onClickDelete = (todo) => async () => {
    await axios.delete(`/todos/${todo._id}`);
    refreshTodos()
  }

  const onClickComplete = (todo) => async () => {
    await axios.put(`/todos/${todo._id}`, {
      text: todo.text,
      done: true
    });
    refreshTodos()
  }

	const doneInfo = (
		<>
			<span>This todo is done</span>
			<span>
				<button onClick={onClickDelete(todo)}> Delete </button>
			</span>
		</>
	)

	const notDoneInfo = (
		<>
			<span>
				This todo is not done
			</span>
			<span>
				<button onClick={onClickDelete(todo)}> Delete </button>
				<button onClick={onClickComplete(todo)}> Set as done </button>
			</span>
		</>
	)


  return (
    <>  
			<div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '70%', margin: 'auto' }}>
				<span>
					{todo.text} 
				</span>
				{todo.done ? doneInfo : notDoneInfo}
			</div>
    </>
  )
}

export default Todo
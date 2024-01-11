import React from 'react'

export const TaskAddInput = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="add a task" className="taskAddInput"/>
      </form>
    </div>
  )
}

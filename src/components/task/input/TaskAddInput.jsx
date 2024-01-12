import React from 'react'

export const TaskAddInput = ({
    inputText, 
    setInputText, 
    taskList, 
    setTaskList
  }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
  }
  const handleChange = (event) => {
    setInputText(event.target.value);
    console.log(inputText);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          placeholder="add a task" 
          className="taskAddInput" 
          onChange={handleChange}
        />
        
      </form>
    </div>
  )
}

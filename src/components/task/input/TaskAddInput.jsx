import React from 'react'

export const TaskAddInput = ({
    inputText, 
    setInputText, 
    taskList, 
    setTaskList
  }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    setTaskList([...taskList, { text: inputText }]);
    setInputText("");
  }
  const handleChange = (event) => {
    setInputText(event.target.value);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          placeholder="add a task" 
          className="taskAddInput" 
          onChange={handleChange}
          value={inputText}
        />
        
      </form>
    </div>
  )
}

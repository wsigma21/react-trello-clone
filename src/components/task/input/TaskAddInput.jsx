import React from 'react'
import {v4 as uuid} from 'uuid';

export const TaskAddInput = ({
    inputText, 
    setInputText, 
    taskList, 
    setTaskList
  }) => {
  const handleSubmit = (event) => {
    const taskId = uuid();
    event.preventDefault();
    if (inputText === "") return;
    setTaskList([
      ...taskList,
      { 
        id: taskId, 
        draggableId: `task-${taskId}`,
        text: inputText,
      }]);
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

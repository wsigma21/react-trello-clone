import React from 'react'
import { Task } from './Task'

export const Tasks = ({ taskList }) => {
  return (
    <div>
      {taskList.map((task) => (
        <Task task={task}/>
      ))}
    </div>
  )
}

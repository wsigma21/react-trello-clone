import React from 'react'

export const TaskCardDeleteButton = ({ taskCardsList, setTaskCardsList, taskCard }) => {
  const TaskCardDeleteButton = (id) => {
    // タスクカードを削除する
    setTaskCardsList(taskCardsList.filter((e) => e.id !== id));
  }
  return (
    <div>
      <button className="taskCardDeleteButton" onClick={() => TaskCardDeleteButton(taskCard.id)}>
        <i className="fa-regular fa-circle-xmark"></i>
      </button>
    </div>
  )
}

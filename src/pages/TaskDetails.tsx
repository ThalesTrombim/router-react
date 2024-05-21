import React from 'react'
import { useParams } from 'react-router-dom'

export const TaskDetails = () => {
  const { taskId } = useParams();
  
  return (
    <div>
      <div>Detalhes da tarefa</div>
      <p>Vendo a tarefa {taskId}</p>
    </div>
  )
}

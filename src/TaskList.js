import React from 'react'
import Task from './Task'
import { useTasks } from './TaskProvider'

// Presentation Component
export default function TaskList() {
  
  const { tasks } = useTasks()
  return (
    <div className={'p-5 md:m-7 lg:m-16'}>
      <div className={'bg-gray-100 p-3'}>
        {
          // 3
          tasks.map((task, i) => 
            <Task key={i} {...task} />
          )
        }
      </div>
    </div>
  )
}
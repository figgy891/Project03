// 1
import React from 'react'
import Task from './Task'
import { useTasks } from './TaskProvider'

export default function TaskList() {
  // 2
  const { tasks } = useTasks()
  return (
    <div className={'p-5 md:m-12 lg:m-20'}>
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
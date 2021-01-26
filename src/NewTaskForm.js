// 1
import React, { useState } from 'react'
import {Button} from "antd";
import { useTasks } from './TaskProvider'

// Presentation Component
export default function NewTaskForm() {

  // 2
  const [task, setTask] = useState('')
  const { addTask } = useTasks()
  
  // 3
  const submit = e => {
    e.preventDefault()
    addTask(task)
    setTask('')
  }

  return (
    // 4
    <form className={'flex justify-center items-center p-5 border m-5 md:m-12 lg:m-20'} onSubmit={submit}>
      {/* // 5 */}
      <input type="text" value={task} className={'border p-1 mr-5 rounded w-full'}  placeholder="Task..." onChange={e => setTask(e.target.value)} required />
      <Button type={'primary'} htmlType={'submit'}>Add</Button>
    </form>
  )
}
import React from 'react'
//import {Button} from "antd";
import { useTasks } from './TaskProvider'

// Presentation  Component
export default function Task({ id, task, complete, deleted }) {

  const { setStatusTask } = useTasks()
  const { deleteTask } = useTasks()
  
  //const checkTask = e => setStatusTask(id, e.target.checked)
  //const deleteCurrentTask = e => deleteTask(id, e.target.value)

  return (
    <ul>
      <li className={deleted ? 'hide' : 'p-2 border-b'} >
        <input type="checkbox"
          className={'mr-1 align-middle'}
          onChange={(e) => setStatusTask(id, e.target.checked)} />
        <span className={complete ? 'task-done' : (deleted ? 'hide' : '')}>{task}
          {/* <Button !!!!!! I could not get button to worK !!!!!
            type={'primary'}
            className={'float-right'}
            onClick={(e) => deleteTask(id, e.target.value)}>Complete
          </Button> */}
        </span>
        <input type="button" value="COMPLETE"
          className={'flex float-right bg-green-600 text-white p-1 rounded'}
          onClick={(e) => deleteTask(id, e.target.value)} />
      </li>
    </ul>
  )
}
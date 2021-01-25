// 1
import React, { createContext, useState, useContext } from 'react'
import { v4 } from "uuid"

// 2
const TaskContext = createContext()
export const useTasks = () => useContext(TaskContext)

export default function TaskProvider({ children }) {
    // 3
    const [tasks, setTasks] = useState([])

    // 4
    const addTask = task =>
        setTasks([
            ...tasks,
            {
                id: v4(),
                task,
                complete: false,
                deleted: false
            }
        ])

    // 5
    const setStatusTask = (id, status) => {
        setTasks(tasks.map(t => t.id === id ? { ...t, complete: status } : t))
    }

    const deleteTask = (id, taskToDelete) => {
        setTasks(tasks.map(t => t.id === id ? { ...t, deleted: taskToDelete } : t))

    }

    // 6
    return (
        <TaskContext.Provider value={{ tasks, addTask, setStatusTask, deleteTask }}>
            {children}
        </TaskContext.Provider>
    )
}
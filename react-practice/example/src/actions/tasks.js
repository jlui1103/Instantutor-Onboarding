import { 
    FETCH_TASKS,
    FETCH_TASK,
    ADD_TASK,
    DELETE_TASK,
    EDIT_TASK,
    TASK_ERROR } from "./types"

export const fetchTasks = () => async (dispatch) => {
    const res = await fetch("http://localhost:5000/tasks")
    const data = await res.json()

    dispatch({
        type: FETCH_TASKS,
        payload: data
    })
}

export const fetchTask = (id) => async (dispatch) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()

    dispatch({
        type: FETCH_TASK,
        payload: data
    })
}

export const addTask = (task) => async(dispatch) => {
    const res = await fetch('http://localhost:5000/tasks', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(task),
        })
    
    const data = await res.json()

    dispatch({
        type: ADD_TASK,
        payload: data
    })
}

export const deleteTask = (id) => async (dispatch) => {
    try {
        await fetch(`http://localhost:5000/tasks/${id}`, {
            method: 'DELETE',
        })
        
        dispatch({
            type: DELETE_TASK,
            payload: id
        })
    } catch(err) {
        dispatch({
            type: TASK_ERROR,
            payload: err
        })
    }
}

export const editTask = (id, edittedTask) => async (dispatch) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(edittedTask),
    })

    const data = await res.json()

    dispatch({
        type: EDIT_TASK,
        payload: data
    })
}
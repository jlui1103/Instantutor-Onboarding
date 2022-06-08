import { 
    FETCH_TASKS,
    FETCH_TASK,
    ADD_TASK,
    DELETE_TASK,
    EDIT_TASK, 
    TASK_ERROR} from "../actions/types"

const initialState = {
    tasks: [],
    task: {},
    error: {}
}

const taskReducer = (state=initialState, action) => {
    const { type, payload } = action

    switch (type) {
        case FETCH_TASKS:
            return {
                ...state,
                tasks: payload
            }

        case FETCH_TASK:
            return {
                ...state,
                task: payload
            }

        case ADD_TASK:
            return {
                ...state,
                tasks: [
                    ...state.tasks,
                    payload
                ],
                task: payload
            }

        case DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter(item => item.id !== payload),
                task: {}
            }
        
        case EDIT_TASK:
            return {
                ...state,
                tasks: state.tasks.map(item => item.id === payload.id ? payload : item),
                task: payload
            }
        
        case TASK_ERROR:
            return {
                ...state,
                error: payload
            }

        default:
            return state
    }
}

export default taskReducer
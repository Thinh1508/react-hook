import React, { createContext, useEffect, useReducer } from "react"
import { todoReducet } from "./reducers/TodoReducer"
import { GET_TODOS, SAVE_TODOS } from "./reducers/types"

export type todoType = {
  id: string
  title: string
}

export type TodoContextType = {
  todos: todoType[]
  dispatch: any
}

export const TodoContext = createContext<TodoContextType | undefined>(undefined)

const TodoContextProvider = ({ children }: any) => {
  // state
  // const [todos, setTodos] = useState<todoType | any>([])

  const [todos, dispatch] = useReducer(todoReducet, [])

  // add list todo with localStorage
  useEffect(() => {
    dispatch({
      type: GET_TODOS,
      payload: null,
    })
  }, [])

  // set todo in localStorage
  useEffect(() => {
    dispatch({
      type: SAVE_TODOS,
      payload: { todos },
    })
  }, [todos])

  // function
  // const addTodo = (todo: todoType) => {
  //   setTodos([...todos, todo])
  // }

  // const deleteTodo = (todo: todoType) => {
  //   setTodos(todos.filter((item: todoType) => item.id !== todo.id))
  // }

  // context data
  const todoContextData = {
    todos,
    dispatch,
  }

  return (
    <TodoContext.Provider value={todoContextData}>
      {children}
    </TodoContext.Provider>
  )
}

export default TodoContextProvider

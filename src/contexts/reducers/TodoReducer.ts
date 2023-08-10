import { todoType } from "../TodoContext"
import { ADD_TODO, DELETE_TODO, GET_TODOS, SAVE_TODOS } from "./types"

export const todoReducet = (state: any, action: any) => {
  const { type, payload } = action

  switch (type) {
    case GET_TODOS:
      console.log("getting todo")
      const todos = localStorage.getItem("todos")
      if (todos) state = JSON.parse(todos)
      return state

    case SAVE_TODOS:
      console.log("save todos")
      localStorage.setItem("todos", JSON.stringify(payload.todos))
      return state

    case ADD_TODO:
      return [...state, payload.todo]

    case DELETE_TODO:
      return state.filter((item: todoType) => item.id !== payload.id)

    default:
      return state
  }
}

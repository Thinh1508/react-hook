import React, { useState, useContext } from "react"
import { v4 as uuidv4 } from "uuid"
import { ThemeContext, ThemeContextType } from "../contexts/ThemeContext"
import { TodoContext, TodoContextType, todoType } from "../contexts/TodoContext"
import { ADD_TODO } from "../contexts/reducers/types"

type Props = {}

const TodoForm = (props: Props) => {
  const { theme } = useContext(ThemeContext) as ThemeContextType
  const { dark, light, isLightTheme } = theme
  const style = !isLightTheme ? light : dark

  const { dispatch } = useContext(TodoContext) as TodoContextType

  const [title, setTitle] = useState("")

  const onTitleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setTitle(event.target.value)

  const onFormSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()

    dispatch({
      type: ADD_TODO,
      payload: {
        todo: {
          id: uuidv4(),
          title,
        },
      },
    })
    setTitle("")
  }

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Enter a new todo"
        onChange={onTitleChange}
        value={title}
        required
      />
      <button type="submit" style={style}>
        Add
      </button>
    </form>
  )
}

export default TodoForm

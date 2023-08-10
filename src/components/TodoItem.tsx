import { useContext } from "react"
import { ThemeContext, ThemeContextType } from "../contexts/ThemeContext"
import { todoType, TodoContext, TodoContextType } from "../contexts/TodoContext"
import { DELETE_TODO } from "../contexts/reducers/types"

type Props = {
  todo: todoType
}

const TodoItem = (props: Props) => {
  const { theme } = useContext(ThemeContext) as ThemeContextType
  const { dark, light, isLightTheme } = theme
  const style = isLightTheme ? light : dark

  const { dispatch } = useContext(TodoContext) as TodoContextType

  return (
    <li key={props.todo.id} style={style}>
      {props.todo.title}
      <span
        onClick={() =>
          dispatch({
            type: DELETE_TODO,
            payload: { id: props.todo.id },
          })
        }
      >
        x
      </span>
    </li>
  )
}

export default TodoItem

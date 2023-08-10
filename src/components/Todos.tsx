import { useContext } from "react"
import { ThemeContext, ThemeContextType } from "../contexts/ThemeContext"
import { TodoContext, TodoContextType } from "../contexts/TodoContext"
import { AuthContext, AuthType } from "../contexts/AuthContext"
import styles from "../styles/Todos.module.scss"
import TodoItem from "./TodoItem"
import TodoForm from "./TodoForm"

type Props = {}

const Todos = (props: Props) => {
  const { isAuth } = useContext(AuthContext) as AuthType

  const { theme } = useContext(ThemeContext) as ThemeContextType
  const { dark, light, isLightTheme } = theme
  const style = isLightTheme ? light.bg : dark.bg

  const { todos } = useContext(TodoContext) as TodoContextType

  return (
    <div className={styles.todo_list} style={style}>
      <TodoForm />
      {isAuth ? (
        <ul>
          {todos.map((todo) => (
            <TodoItem todo={todo} key={todo.id} />
          ))}
        </ul>
      ) : (
        <ul>
          <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
            You not login
          </h2>
        </ul>
      )}
    </div>
  )
}

export default Todos

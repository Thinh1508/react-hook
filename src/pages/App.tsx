import NavBar from "../components/NavBar"
import Todos from "../components/Todos"
import AuthContextProvider from "../contexts/AuthContext"
import ThemeContextProvider from "../contexts/ThemeContext"
import TodoContextProvider from "../contexts/TodoContext"

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <NavBar />
          <TodoContextProvider>
            <Todos />
          </TodoContextProvider>
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  )
}

export default App

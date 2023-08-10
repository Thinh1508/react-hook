import styles from "../styles/NavBar.module.scss"
import { useContext } from "react"
import { ThemeContext, ThemeContextType } from "../contexts/ThemeContext"
import { AuthContext, AuthType } from "../contexts/AuthContext"
import ThemeToggle from "./ThemeToggle"

type Props = {}

const NavBar = (props: Props) => {
  const { isAuth, toggerAuth } = useContext(AuthContext) as AuthType

  const { theme } = useContext(ThemeContext) as ThemeContextType
  const { dark, light, isLightTheme } = theme
  const style = isLightTheme ? light.bg : dark.bg

  return (
    <div className={styles.navbar} style={style}>
      <h1>MY HOOK APP</h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>
          <button onClick={toggerAuth}>{!isAuth ? "Login" : "Logout"}</button>
        </li>
      </ul>
      <ThemeToggle />
    </div>
  )
}

export default NavBar

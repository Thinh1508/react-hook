import { useContext } from "react"
import { ThemeContext, ThemeContextType } from "../contexts/ThemeContext"
import styles from "../styles/NavBar.module.scss"
import { BsSunFill } from "react-icons/bs"

type Props = {}

const ThemeToggle = (props: Props) => {
  const { toggleTheme, theme } = useContext(ThemeContext) as ThemeContextType
  const { dark, light, isLightTheme } = theme
  return (
    // <button className={styles.toggle_btn} onClick={toggleTheme} style={style}>
    //   {isLightTheme ? "Dark" : "Light"}
    // </button>
    <BsSunFill
      className={styles.toggle_btn}
      color={isLightTheme ? "black" : "white"}
      onClick={toggleTheme}
    />
  )
}

export default ThemeToggle

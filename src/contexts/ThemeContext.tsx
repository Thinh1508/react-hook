import { createContext, useState } from "react"

export type ThemeContextType = {
  theme: {
    isLightTheme: boolean
    light: {
      bg: {
        background: string
        color: string
      }
      background: string
      color: string
    }
    dark: {
      bg: {
        background: string
        color: string
      }
      background: string
      color: string
    }
  }
  toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
)

const ThemeContextProvider = ({ children }: any) => {
  // state
  const [theme, setTheme] = useState({
    isLightTheme: false,
    light: {
      bg: {
        background: "rgb(219,219,219)",

        color: "black",
      },
      background: "rgb(240,240,240)",
      color: "black",
    },
    dark: {
      bg: {
        background: "rgb(29,29,29)",
        color: "white",
      },
      background: "rgb(50,50,50)",
      color: "white",
    },
  })

  // change theme
  const toggleTheme = () => {
    setTheme({
      ...theme,
      isLightTheme: !theme.isLightTheme,
    })
  }

  // context data
  const themeContextData = {
    theme,
    toggleTheme,
  }

  // return provider
  return (
    <ThemeContext.Provider value={themeContextData}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider

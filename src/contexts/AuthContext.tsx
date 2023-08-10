import { createContext, useState, useEffect } from "react"

export type AuthType = {
  isAuth: boolean
  toggerAuth: () => void
}

export const AuthContext = createContext<AuthType | undefined>(undefined)

const AuthContextProvider = ({ children }: any) => {
  // state
  const [isAuth, setIsAuth] = useState(false)

  // change auth
  const toggerAuth = () => {
    setIsAuth(!isAuth)
  }

  // context data
  const authContextData = {
    isAuth,
    toggerAuth,
  }

  // notification login
  useEffect(() => {
    alert(
      isAuth
        ? "Login successful"
        : "You aer logger out. Please login to se todos"
    )
  }, [isAuth])

  return (
    <AuthContext.Provider value={authContextData}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider

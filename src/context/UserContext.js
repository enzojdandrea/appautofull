import { useState, createContext } from "react"
export const UserContext = createContext()

export const UserProvider = ({children}) =>{
    const [user,setUser] = useState([])

    const addUser =(userToAdd) =>{
        setUser(userToAdd)
    }
    return(
        <UserProvider value={{user,addUser}}>
            {children}
        </UserProvider>
    )
}
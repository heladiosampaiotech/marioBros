import { createContext, useEffect, useState } from "react";

export const UserContext = createContext()

export const UserStore = ({ children }) => {
    const [login, setLogin] = useState(false)
    useEffect(() => {
        setData({name: 'Heladio', age: 35})
    },[])

    return (
        <UserContext.Provider value={(login, setLogin)}>
            {children}
        </UserContext.Provider> 
    )
}

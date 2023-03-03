import { createContext } from "react";

export const GlobalContext = createContext()

const GlobalContextProvider = (props) => {
    return (
        <GlobalContext.Provider value = {"Test Text"}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export { GlobalContextProvider }
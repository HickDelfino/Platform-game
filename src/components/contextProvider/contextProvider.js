import { createContext, useState, useContext } from "react";
import { ContextProvider } from "react-is";

const ApplicationContext = createContext();

export default function ContextProvider({children}){
    const [contextCache, setContextCache] = useState({
        searchString: ''
    });

    return (
        <ApplicationContext.Provider value={{contextCache, setContextCache}}>
            {children}
        </ApplicationContext.Provider>
    )
}

export function useAppContext(){
    const context = useContext(ApplicationContext);
    if(!context) throw new Error("useAppContext must be used within a ApplicationContext");
    const {contextCache, setContextCache} = context;
    return {contextCache, setContextCache};
}
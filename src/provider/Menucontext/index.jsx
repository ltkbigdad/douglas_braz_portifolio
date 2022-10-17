import { createContext, useState } from "react";

export const MenuContext = createContext();

export const MenuProvider = ({children}) => {
    const [ isMenu, setIsMenu] = useState(() => false);

    return (
        <MenuContext.Provider value={isMenu}>
            {children}
        </MenuContext.Provider>
    )
}
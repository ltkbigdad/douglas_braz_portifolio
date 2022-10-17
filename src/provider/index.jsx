import { MenuProvider } from "./MenuModal";

export const Providers = ({children}) => {
    return(
        <MenuProvider>{children}</MenuProvider>
    )
}
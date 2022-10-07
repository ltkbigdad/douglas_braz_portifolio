import { Route, Routes as RoutesPage } from "react-router-dom"
import { ScreenTest } from "../Pages/ScreenTest"
import { Home } from "../Pages/Home"

export const Routes = () =>{
    return(
        <RoutesPage>
            <Route exact path="/" element={<Home/>}/>
            <Route path="test" element={<ScreenTest/>}/>
        </RoutesPage>
    )
}
import { AboutMe } from "../../components/AboutMe"
import { Contact } from "../../components/Contact"
import { Hability } from "../../components/Hability"
import { Header } from "../../components/Header"
import { Projects } from "../../components/Projects"
import { Background } from "./style"



export const Home = () =>{
    return(
        <>  

            <Background>
               
                <ul> 
                        <li className='boxAnimated'></li>
                        <li className='boxAnimated'></li>
                        <li className='boxAnimated'></li>
                        <li className='boxAnimated'></li>
                        <li className='boxAnimated'></li>
                        <li className='boxAnimated'></li>
                        <li className='boxAnimated'></li>
                        <li className='boxAnimated'></li>
                        <li className='boxAnimated'></li>
                        <li className='boxAnimated'></li>
                </ul>

                <Header/>
                <AboutMe/>        
                <Hability/>
                <Projects/>
                <Contact/> 
            </Background>
                      
        </>
    )   
}
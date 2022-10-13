import { Container, MenuContainer } from "./style"
import {TiThMenu} from "react-icons/ti"
import { useState } from "react"

export const Header = () => {
    const [ isMenu, setIsMenu] = useState(false)

    function handleMenu (){
        if(isMenu === false){
            return setIsMenu(true)
        } else{
            return setIsMenu(false)
        }
    }


    return (
        <>        
        {
            isMenu ? (
                <MenuContainer>
                    <p>teste menu</p>
                </MenuContainer>
                 
    
            ) : (
            <Container>
                <p className="logo">Portifólio</p>
    
                <TiThMenu className="menuHamburguer" onClick={()=> handleMenu()}/>
    
                <ul className="menu">
                    <li className="menuLista">
                        <a>Sobre</a>
                    </li>
                    <li className="menuLista">
                        <a>Especialidades</a>
                    </li>
                    <li className="menuLista">
                        <a>Projetos</a>
                    </li>
                    <li className="menuLista">
                        <a>Contato</a>
                    </li>
                </ul>
            </Container>      
             
            )
    
            
        }
        </>



    )
}
import { Container } from "./style"
import {TiThMenu} from "react-icons/ti"
import { useState } from "react"

export const Header = () => {
    const [mobile, setMobile] = useState(false);
    
    function handleMenu () {
        if(mobile === false){
            return setMobile(true)
        } else {
            return setMobile(false)
        }
    }

    return (
        <Container>
            <p className="logo">Portfólio</p>

            <TiThMenu className="menuHamburguer" onClick={() => handleMenu()}/>

            { mobile ? (
                    <>                        
                        <ul className="menuMobile">
                            <li className="menuListMobile">
                                <a>Sobre</a>
                            </li>
                            <li className="menuListMobile">
                                <a>Habilidades</a>
                            </li>
                            <li className="menuListMobile">
                                <a>Projetos</a>
                            </li>
                            <li className="menuListMobile">
                                <a>Contato</a>
                            </li>
                        </ul>                    
                    </>

                ) : ( 
                         <></>             
                ) 
            }

                <ul className="menu">
                    <li className="menuList">
                        <a>Sobre</a>
                    </li>
                    <li className="menuList">
                        <a>Habilidades</a>
                    </li>
                    <li className="menuList">
                        <a>Projetos</a>
                    </li>
                    <li className="menuList">
                        <a>Contato</a>
                    </li>
                </ul>

            




        </Container>        

    )
}
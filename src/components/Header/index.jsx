import { Container } from "./style"
import {TiThMenu} from "react-icons/ti"

export const Header = () => {
    return (
        <Container>
            <p className="logo">Portifólio</p>

            <TiThMenu className="menuHamburguer"/>

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
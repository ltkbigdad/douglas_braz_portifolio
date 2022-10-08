import { ArticleContent, Container, Content } from "./style"
import { Button } from "../Button"
import perfil from "../../assets/images/perfil.png"

export const AboutMe = () => {
    return(
        <Container>
            <Content>
                <div className="description">
                    <h1>Olá, eu sou <span>Douglas Braz</span></h1>
                    <p>Desenvolvedor Front-End</p>

                    <div className="buttonsBox">
                    <Button default>Download CV</Button>
                    <Button>Contato</Button>
                    </div>
                </div>

                <div className="imageBox">
                    <img src={perfil} alt="foto de perfil"/>
                </div>
            </Content>

            <ArticleContent>

            </ArticleContent>
        </Container>


    )
}
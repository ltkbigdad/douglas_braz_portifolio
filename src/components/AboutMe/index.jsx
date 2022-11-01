import { ArticleContent, Container, Content } from "./style"
import { Button } from "../Button"
import perfil from "../../assets/images/perfil.png"

export const AboutMe = () => {
    return(
        <>
            
            
        
            <Container className="aboutMe">
                <Content>
                    <div className="description">
                        <h1>Olá, eu sou <strong>Douglas Braz</strong></h1>
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
                    <h2>Sobre mim</h2>
                    <p>Sou Douglas Braz, minha conexão e paixão com a tecnologia começou na adolescência, sempre tentava resolver problemas do cotidiano com tecnologia, através de tutoriais e demais ferramentas disponíveis na internet.  Quando descobri que sou capaz de criar soluções para a minha vida e de outras pessoas,  ficou claro que eu queria ser  desenvolvedor. Cursei desenvolvimento web Front -End na Kenzie Academy Brasil.  Sou muito curioso e sempre estou buscando conhecimento e  gosto de me deparar com problemas a serem resolvidos, por quê existe a necessidade de buscar mais conhecimento para resolvê-los e assim vou adquiro mais  experiência.</p>

                </ArticleContent>
            </Container>
        
        </>


    )
}
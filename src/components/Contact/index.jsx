import { ContactContent, Container, Content, ImageContent, CardContact } from "./style"
import contato from "../../assets/images/contato.svg"
import {AiOutlineUser} from "react-icons/ai"
import {AiOutlineMail} from "react-icons/ai"
import { AiFillLinkedin } from "react-icons/ai"
import { AiFillGithub } from "react-icons/ai"
import {IoLogoVercel} from "react-icons/io5"
import { AiFillInstagram } from "react-icons/ai"

export const Contact = () => {
    const cardItens_arr = [
        {
            icon: <AiOutlineUser  className="icon"/>,
            tittle: "Nome",
            item: "Douglas Braz Batista" 
        },
        {
            icon: <AiOutlineMail  className="icon"/>,
            tittle: "E-mail",
            item: "douglasbraz.dev@gmail.com",
            link: "mailto:douglasbraz.dev@gmail.com"
           
        },
        {
            icon: <AiFillLinkedin  className="icon"/>,
            tittle: "LinkedIn",
            item: "Douglas Batista",
            link: "https://www.linkedin.com/in/dougbatista/",
        },
        {
            icon: <AiFillGithub  className="icon"/>,
            tittle: "Github",
            item: "Douglas Braz Batista",
            link: "https://github.com/ltkbigdad"
        },
        {
            icon: < IoLogoVercel className="icon"/>,
            tittle: "Vercel",
            item: "Douglas Braz",
            link: "https://vercel.com/douglasbraz"
        },
        {
            icon: <AiFillInstagram  className="icon"/>,
            tittle: "instagram",
            item: "doug.developer",
            link: "https://www.instagram.com/doug.developer/"
        }
        
    ]
    return(
        <Container>
            <div className="divTitle">
            <hr ></hr><h4>Contato</h4><hr align="left" width="30%" size="5"/>
            </div>

            <Content>
                <ContactContent>
                    <h5>Visite minhas redes sociais</h5>
                    {cardItens_arr.map((el, index) => {
                        const { icon, tittle, item, link } = el;
                        return (
                            <CardContact key={index}>
                                <a target="_blank" rel="noreferrer" href={link}>
                                    {icon}
                                </a>
                                
                                <div>
                                <p className="tittle">{tittle}</p>
                                <p className="item">{item}</p>                            
                                </div>
                            </CardContact>

                        )
                    })}
                    
                </ContactContent>
                <ImageContent>
                    <img src={contato} alt="contato"/>
                </ImageContent>
            </Content>
           
        </Container>
    )
}
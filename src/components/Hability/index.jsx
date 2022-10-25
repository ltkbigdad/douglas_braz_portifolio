import html from "../../assets/images/html.png"
import css from "../../assets/images/css.png"
import javascript from "../../assets/images/javascript.png"
import react from "../../assets/images/react.png"
import styled from "../../assets/images/styled.png"
import { Container, CardContainer, Content, Card } from "./style"

export const Hability = () => {
    const hab_arr = [
        {
            image: html,
            name: "HTML 5"
        },
        {
            image: css,
            name: "CSS 3"
        },
        {
            image: javascript,
            name: "Javascript"
        },
        {
            image: react,
            name: "ReactJS"
        },
        {
            image: styled,
            name: "Styled Components"
        },
        {
            image: html,
            name: "HTML 5"
        },
        {
            image: css,
            name: "CSS 3"
        },
        {
            image: javascript,
            name: "Javascript"
        },
        {
            image: react,
            name: "ReactJS"
        },
        {
            image: styled,
            name: "Styled Components"
        }

    ]

    return(
        <Container className="hability">
            <h3>Habilidades</h3>

            <CardContainer>
                <Content>
                    {hab_arr.map((el, index) => {
                            const { image, name } = el;
                            return (                                
                                    <Card>
                                    <img className="hab_image" src={image} alt="imge"/>
                                    <p className="name">{name}</p>
                                    </Card>
                            )
                        } 
                    )
                    }
                </Content>  
            </CardContainer>

              
            
        </Container>

    )
}
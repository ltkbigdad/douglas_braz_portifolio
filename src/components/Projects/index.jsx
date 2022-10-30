import { Container, ProjectBox, Content, CardProject, CardDescription, Background } from "./style"
import  test  from "../../assets/images/test.png"
import { Button } from "../Button"
import { useState } from "react"

export const Projects = () => {
    const projects_arr = [
        {
            id: "1",
            image: test,
            name: "Projeto teste",
            description: "descriçao teste",
            technologies: "tecnologia teste",
            repository: "https://www.google.com/" ,
            link: "https://www.youtube.com/",
        },
        {
            id: "2",
            image: test,
            name: "Projeto teste",
            description: "descriçao teste",
            technologies: "tecnologia teste",
            repository: "https://www.google.com/" ,
            link: "https://www.youtube.com/",
        },
        {
            id: "3",
            image: test,
            name: "Projeto teste",
            description: "descriçao teste",
            technologies: "tecnologia teste",
            repository: "https://www.google.com/" ,
            link: "https://www.youtube.com/",
        },
        {
            id: "4",
            image: test,
            name: "Projeto teste",
            description: "descriçao teste",
            technologies: "tecnologia teste",
            repository: "https://www.google.com/" ,
            link: "https://www.youtube.com/",
        },
        {
            id: "5",
            image: test,
            name: "Projeto teste",
            description: "descriçao teste",
            technologies: "tecnologia teste",
            repository: "https://www.google.com/" ,
            link: "https://www.youtube.com/",
        },
        {
            id: "6",
            image: test,
            name: "Projeto teste",
            description: "descriçao teste",
            technologies: "tecnologia teste",
            repository: "https://www.google.com/" ,
            link: "https://www.youtube.com/",
        },
        {
            id: "7",
            image: test,
            name: "Projeto teste",
            description: "descriçao teste",
            technologies: "tecnologia teste",
            repository: "https://www.google.com/" ,
            link: "https://www.youtube.com/",
        },
        {
            id: "8",
            image: test,
            name: "Projeto teste",
            description: "descriçao teste",
            technologies: "tecnologia teste",
            repository: "https://www.google.com/" ,
            link: "https://www.youtube.com/",
        },
        {
            id: "9",
            image: test,
            name: "Projeto teste",
            description: "descriçao teste",
            technologies: "tecnologia teste",
            repository: "https://www.google.com/" ,
            link: "https://www.youtube.com/",
        }
    ] 

    const [modal, setModal] = useState(false)
    const [ ad, setAd] = useState ("");

    const projects_filtered = projects_arr.filter((project) => {
        return project.id === ad;
    });

    return (
        
        <Container>
                      
            <p>Projetos</p>

                <ProjectBox>  
                    <Content>
                        {projects_arr.map((el) => {
                                const {id, image, name} = el;
                                return( 
                                    <>
                                    <CardProject key={id}>                
                                        <img src={image} alt="teste"/>
                                        <div className="cardHover">
                                            <p>{name}</p>                        
                                            <Button default onClick={() => {setModal(true); setAd(id) } } >Saiba mais</Button>
                                        </div>
                                    </CardProject>
                                    </>
                                )
                            })
                        }
                    </Content>

                {
                    modal ? ( projects_filtered.map((el) => {
                                const {id, image, name, description, technologies, link, repository} = el;
                                return( 
                                    <Background>
                                         <CardDescription key={id}>
                                            <div className="boxImgButtons">
                                                <div className="boxImage">
                                                    <img src={image} alt={name}/> 
                                                </div>
                                                <div className="boxButtons">
                                                    <a target="_blank" rel="noreferrer" href={link}><Button default>Acessar projeto</Button></a>
                                                    <a target="_blank" rel="noreferrer" href={repository}><Button > Acessar repositório</Button></a>
                                                </div>
                                            </div>

                                            <div className="boxDescriptions">
                                            <p>{name}</p>
                                            <p>{description}</p>
                                            <p>{technologies}</p>
                                            </div>

                                            <p onClick={() => setModal(false)}>X</p>
                                        </CardDescription>                                         
                                    </Background>
                                )
                            }                
                        )) : (<></>)
                }

               
                                     
                                
                  

                
            </ProjectBox>



            
             
         
            
        </Container>
    )
}
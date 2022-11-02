import { Container, ProjectBox, Content, CardProject, CardDescription, Background } from "./style"
import  test  from "../../assets/images/test.png"
import { Button } from "../Button"
import { useState } from "react"
import doit_home from "../../assets/images/projetos/doit/doit_home.png"


export const Projects = () => {
    const projects_arr = [
        {
            id: "1",
            image: doit_home,
            // video:doit_video ,
            name: "Do It",
            description: "descriçao teste",
            technologies: "tecnologia teste",
            repository: "https://www.google.com/" ,
            link: "https://app-to-do-list-blush.vercel.app/",
        },
        {
            id: "2",
            image: test,
            video:"" ,
            name: "Projeto teste",
            description: "descriçao teste",
            technologies: "tecnologia teste",
            repository: "https://www.google.com/" ,
            link: "https://www.youtube.com/",
        },
        {
            id: "3",
            image: test,
            video:"" ,
            name: "Projeto teste",
            description: "descriçao teste",
            technologies: "tecnologia teste",
            repository: "https://www.google.com/" ,
            link: "https://www.youtube.com/",
        },
        {
            id: "4",
            image: test,
            video:"" ,
            name: "Projeto teste",
            description: "descriçao teste",
            technologies: "tecnologia teste",
            repository: "https://www.google.com/" ,
            link: "https://www.youtube.com/",
        },
        {
            id: "5",
            image: test,
            video:"" ,
            name: "Projeto teste",
            description: "descriçao teste",
            technologies: "tecnologia teste",
            repository: "https://www.google.com/" ,
            link: "https://www.youtube.com/",
        },
        {
            id: "6",
            image: test,
            video:"" ,
            name: "Projeto teste",
            description: "descriçao teste",
            technologies: "tecnologia teste",
            repository: "https://www.google.com/" ,
            link: "https://www.youtube.com/",
        },
        {
            id: "7",
            image: test,
            video:"" ,
            name: "Projeto teste",
            description: "descriçao teste",
            technologies: "tecnologia teste",
            repository: "https://www.google.com/" ,
            link: "https://www.youtube.com/",
        },
        {
            id: "8",
            image: test,
            video:"" ,
            name: "Projeto teste",
            description: "descriçao teste",
            technologies: "tecnologia teste",
            repository: "https://www.google.com/" ,
            link: "https://www.youtube.com/",
        },
        {
            id: "9",
            image: test,
            video:"" ,
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
                      
            <p className="projectTittle">Projetos</p>

                <ProjectBox>  
                    <Content>
                        {projects_arr.map((el) => {
                                const {id, image, name} = el;
                                return( 
                                    <>
                                    <CardProject key={id} className="cardtest" >                
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
                                                    <a target="_blank" rel="noreferrer" href={link}><Button default className="buttons" >Acessar projeto</Button></a>
                                                    <a target="_blank" rel="noreferrer" href={repository} ><Button className="buttons" > Acessar repositório</Button></a>
                                                </div>
                                            </div>

                                            <div className="boxDescriptions">
                                            <p className="descriptionName">{name}</p>
                                            <p className="descriptionText" >{description}</p>
                                            <p className="descriptionTechnologies">{technologies}</p>
                                            </div>

                                            <p className="descriptionClose" onClick={() => setModal(false)}>X</p>
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
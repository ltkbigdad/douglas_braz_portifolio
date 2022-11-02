import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;


    .projectTittle{
        font-size: 2.5em;
        font-weight: 600;
        color: var(--white);
        margin-top: 30px;
    }
`;

export const ProjectBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-left: 2px;        
    overflow-y: scroll;
    width: 94%;

    @media (min-width: 1023px){
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        /* height: 622px; */
        overflow-y: auto;
    }
`;

export const Content = styled.div`
    display: flex;    
    flex-direction: row; 

    @media (min-width: 1023px){
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        
    }
`;


export const CardProject = styled.div`
    width: 20em;
    height: 23em;
    margin: 10px;
   
   
    img{
        width: 100%;
        height: 84%;
        border-bottom: 3px solid #8257e6;
    }

    .cardHover{
        display: none;
        justify-content: space-around;
        align-items: baseline;
        margin-bottom: 5px;
        margin-top: 5px;
        background: var(--grey-500);

        p{
            font-size: 1.3em;
            font-weight: 600;
            color: var(--white);
        
        }
        
        button{
            width: 6em;
            height: 1.5em;
            margin: 0px;
        }
    }

    :hover{
        cursor: pointer;
        transform: scale(1.1);
        transition: .3s;
        background: var(--grey-500);
        .cardHover{
            display: flex;
            transition: .3s;
            
        }
    }
`;



export const CardDescription = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 95%;
    height: 70%;
    padding: 5px;    
    background-color: var(--purple-800); 
    border-radius: 1rem; 
    border: 3px solid #8257e6;   
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 5;
    transform: translate(-50%, -50%);

    .boxImgButtons{
        width: 100%;   

        .boxImage{
            width: 100%;
            img{
                width: 100%;
            }
        }

        .boxButtons{
            display: flex;
            justify-content: space-around;
            
            .buttons{
                width: 85%;
            }

        }
    }

    .boxDescriptions{
        height: 50%;
        text-align: center;

        .descriptionName{
            margin-top: 30px;
            font-size: 1.1em;
            font-weight: 600;
            color: var(--white);
        }

        .descriptionText, .descriptionTechnologies{
            font-size: 1em;
            font-weight: 300;
            color: var(--white);
            margin-top: 30px;

        }

       
    }

    .descriptionClose{
        font-size: 1.5em;
        font-weight: 500;
        color: var(--white);
        margin-top: 30px;

        :hover{
            cursor: pointer;
            transform: scale(1.1);
            transition: .3s;
           color: var(--grey-500);            
        }

        @media (min-width: 1023px){
            margin: 10px;
        }
    }

    @media (min-width: 1023px){
        flex-direction: row;
        align-items: flex-start;


        .boxImgButtons{
            width: 50%;
            height: 100%;
            
        
            .boxImage{
                width: 100%;
                height: 70%;
                img{
                    width: 100%;
                    height: 100%;
                }
            }

            .boxButtons{
                display: flex;
                justify-content: space-around;
                align-items: center;
                height: 30%;
                /* margin-top: 30px; */
                
                .buttons{
                    width: 100%;
                }

            }

        }

        .boxDescriptions{
            width: 50%;
            height: 100%;
            display: flex;            
            flex-direction: column;
            margin-left: 10px;
            text-align: center;
        }


    }

`;

export const Background = styled.div`
    
`;
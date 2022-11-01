import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
`;

export const ProjectBox = styled.div`
    display: flex;
        flex-wrap: wrap;
        margin-left: 2px;
        
        overflow-y: scroll;
        width: 94%;
`;

export const Content = styled.div`
    display: flex;    
    flex-direction: row; 
`;


export const CardProject = styled.div`
    width: 16em;
    margin: 10px;
    border-bottom: 3px solid #8257e6;
    
   
    img{
        width: 100%;
    }

    .cardHover{
        display: none;
        justify-content: space-around;
        align-items: baseline;
        margin-bottom: 5px;
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
        transform: scale(1.2);
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
    padding: 1.5rem;    
    background-color: var(--purple-800); 
    border-radius: 1rem;    
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
    }

    .boxDescriptions{
        height: 50%;
    }

`;

export const Background = styled.div`
   
   
    border: 1px solid red;
    /* position: fixed; */
    /* z-index: 5; */
    background: red;
    
`;
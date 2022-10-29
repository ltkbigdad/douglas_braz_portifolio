import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    /* .projectBox{
        display: flex;
        gap: 3.75rem;
        flex-wrap: wrap;
        align-items: center;
    } */


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
    width: 75%;
    padding: 1.5rem;    
    background-color: red;
    border-radius: 1rem;    
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 5;
    transform: translate(-50%, -50%);

    .boxImgButtons{
        height: 50%;

        .boxImage{
            height: 50%;
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
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 5;
    background: red;
    
`;
import styled from "styled-components";

export const Container = styled.div`
height: 100vh;

`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .description{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 80%;
        margin-top: 2em;

        h1{
            width: 70%;
            text-align: center;
            color: var(--white);
            span{
                color: var(--purple-300);
            }
        }

        p{
            display: flex;        
            justify-content: center;
            align-items: center;
            width: 70%;
            margin-top: 1em;
            color: var(--grey-500);
            font-weight: 600;
        }

        .buttonsBox{
            margin-top: 1em;
            width: 70%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

        }

    }

    .imageBox{
        display: none;        
    }

`;

export const ArticleContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2{
        
        color: var(--white);
    }

    p{
        
        width: 70%;
        display: flex;        
        justify-content: center;
        align-items: center;
        text-align: center;
        width: 70%;
        margin-top: 1em;
        color: var(--grey-500);
    }
    
`;
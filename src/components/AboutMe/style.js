import styled from "styled-components";

export const Container = styled.div`
height: 100vh;
margin-top: 5px;

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

    @media (min-width: 1023px){
       display: flex;
       flex-direction: row;
       justify-content: space-around;
       align-items: center;

       margin-top: 10px;

       .description{
            width: 57%;
           
            h1{
              font-size: 3em; 
            }

            p{
              font-size: 2em;
              margin-top: 0px;
            }

            .buttonsBox{
                display: flex;
                flex-direction: row;                
                font-size: 1.3em;
            }

        }

       .imageBox{            
            display: flex;            
            width: 20%; 
            margin-top: 2% ;
                     
         
            img{
                width: 100%;
                border-radius: 50%;
            }
        }


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

    @media (min-width: 1023px){
        margin-top: 40px;

        h2{
            font-size: 2em;
        }

        p{
            width: 63%;
            font-size: 1em;           
        }
    }
    
`;
import styled from "styled-components";


export const Container = styled.div`
height: 100vh;
margin-top: 5px;
border-bottom: 1px solid var(--purple-300);

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
        font-family: 'Special Elite', cursive;

        @keyframes typing {
            from{
                    width: 0;
                }
                to{
                    width: 12.5em;
            }
                       
        }

        @keyframes cursor {
            from{
                border-right-color: var(--purple-300) ;
            }

            to{
                border-right-color: var(--grey-800) ;
            }
        }


        h1{
            width: 70%;
            text-align: center;
            color: var(--white);
            font-size: 1.5em;
            strong{
                color: var(--purple-300);
            }
            border-right: 2px solid;
            animation: typing 4s steps(50) 1s normal both, cursor 900ms infinite normal ;

            white-space: nowrap;
            overflow: hidden;
            
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
        
        /* width: 80%; */
        display: flex;        
        justify-content: center;
        align-items: center;
        text-align: center;
        font-size: 20px;
        margin-top: 1em;
        color: var(--grey-500);
    }

    @media (min-width: 1023px){
        margin-top: 80px;
        margin-bottom: 30px;

        h2{
            font-size: 2em;
        }

        p{
            width: 63%;
            font-size: 1.7em;           
        }
    }
    
`;
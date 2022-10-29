import styled, { keyframes } from "styled-components";

const animate = keyframes`
0%{
    transform: translateY(0) rotate(0deg);
    opacity: 1;
    border-radius: 0;
}
100%{
    transform: translateY(-1000px) rotate(720deg);
    opacity: 0;
    border-radius: 50%;
}
`;

export const Background = styled.div`
    /* background: var(--grey-800); */
    background: -webkit-linear-gradient(to left, #ffff, gray);
    width: 100%;
    height: 100vh;
   
    /* position: absolute; */
    z-index: -1000;
    /* opacity: 0.7; */

    ul{
        z-index: -8;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        opacity: 0.8;
        .boxAnimated {
            position: absolute;
            display: block;
            list-style: none;
            width: 20px;
            height: 20px;
            background: var(--purple-200);
            animation: ${animate} 25s linear infinite;
            bottom: -154px;
            z-index: -8;
        }
        .boxAnimated:nth-child(1) {
            left: 25%;
            width: 80px;
            height: 80px;
            animation-delay: 2s;
        }
        .boxAnimated:nth-child(2) {
            left: 10%;
            width: 20px;
            height: 20px;
            animation-delay: 4s;
            animation-duration: 60s;
        }
        .boxAnimated:nth-child(3) {
            left: 70%;
            width: 20px;
            height: 20px;
            animation-delay: 6s;
        }
        .boxAnimated:nth-child(4) {
            left: 40%;
            width: 60px;
            height: 60px;
            animation-delay: 2s;
            animation-duration: 20s;
        }
        .boxAnimated:nth-child(5) {
            left: 65%;
            width: 20px;
            height: 20px;
            animation-delay: 2s;
        }
        .boxAnimated:nth-child(6) {
            left: 75%;
            width: 110px;
            height: 110px;
            animation-delay: 5s;
        }
        .boxAnimated:nth-child(7) {
            left: 35%;
            width: 150px;
            height: 150px;
            animation-delay: 9s;
        }
        .boxAnimated:nth-child(8) {
            left: 50%;
            width: 25px;
            height: 25px;
            animation-delay: 17s;
            animation-duration: 47s;
        }
        .boxAnimated:nth-child(9) {
            left: 20%;
            width: 15px;
            height: 15px;
            animation-delay: 4s;
            animation-duration: 37s;
        }
        .boxAnimated:nth-child(10) {
            left: 85%;
            width: 150px;
            height: 150px;
            animation-delay: 2s;
            animation-duration: 13s;
        }
    }

`;

export const Container = styled.div`
height: 100%;
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

        h2{
            font-size: 2em;
        }

        p{
            width: 63%;
            font-size: 1.7em;           
        }
    }
    
`;
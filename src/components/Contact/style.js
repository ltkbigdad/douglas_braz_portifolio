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
    height: 100vh;   
    display: flex;
    flex-direction: column;
  

    .divTitle{
        display: flex;
        justify-content: center;
        align-items: baseline;
        width: 100%;

        hr{
            
            width: 15%; 
            size: 5px;
            border: 1px solid #8257e6;
            background: linear-gradient(to bottom, #a40ee4, #8257e6, #13131f);

        }

        h4{
            font-size: 2.5em;
            font-weight: 600;
            color: var(--white);
            margin-top: 30px;
        }
    }

`;

export const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    @media (min-width: 1023px){
        display: flex;
        
        
    }
    
`;

export const ContactContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    margin-top: 10px;
    h5{
        font-size: 1.5em;
        color: var(--purple-300);
        margin: 10px;
    }

    @media (min-width: 1023px){
        margin-left: 5%;
        margin-right: 10%;
    }

    

    
`;

export const CardContact = styled.div`
    display: flex;
    margin: 20px;
    
   
    .icon{
        color: var(--grey-500);
        margin-top: 3px;
        width: 2em;
        height: 2em;
        :hover{
            cursor: pointer;
            transform: scale(0.95);
        }
    }

    .tittle{
        font-size: 2em;
        font-weight: 700;
        margin-left: 5px;
        color: var(--grey-500)
    }

    .item{
        font-size: 1em;
        font-weight: 400;
        margin-left: 5px;
        margin-top: 5px;
        color: var(--grey-500);
    }
`;

export const ImageContent = styled.div`
    img{
        display: none;
    }

    @media (min-width: 1023px){
        img{
            display: block;        
            width: 95%;
        }
      
    }
`;
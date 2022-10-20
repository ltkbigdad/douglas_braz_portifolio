import styled from "styled-components";

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
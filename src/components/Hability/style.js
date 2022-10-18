import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    border-bottom: 1px solid var(--purple-300);
   
    h3{
        margin-top: 10px;
        font-size: 3em;
        color: var(--white);
    }
`;

export const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-left: 2px;
    margin-top: 152px;
    overflow-y: scroll;
    width: 94%;

    @media (min-width: 1023px){
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        height: 622px;
    }
    
    
    

`;

export const Content = styled.div`
    
    /* height: 64%; */
    display: flex;    
    flex-direction: row;   
    @media (min-width: 1023px){
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        
    }

   
    
   
`;

export const Card = styled.div`
    width: 174px;
    height: 272px;
    margin: 10px;
    
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: linear-gradient(to bottom, #a40ee4, #8257e6, #13131f);
    border-radius: 10px;
    box-shadow: 0 70px 63px -60px #000000;
    :hover{
        cursor: pointer;       
        transform: scale(0.95);
    }
    


    .hab_image{
        width: 50%;
    }

    .name{
        font-size: 16px;
        margin-top: 50px;
        font-weight: 600;

    }


`;
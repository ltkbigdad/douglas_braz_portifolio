import styled from "styled-components"

export const Container = styled.button`

    width: 10em;
    height: 2.5em;
    margin: 0.6em;
    background: ${(props) => (props.default ? "linear-gradient(90deg, rgba(130,87,230,0.8) .2%, rgba(121,48,190,0.648) 100%)" : "transparent") };
    color: var(--white);
    border-radius: 8px;
    border: 1px solid  rgba(130,87,230,0.8);    
    font-size: 1em;
    font-weight: 800;
    text-align: center;
    line-height: 19px;
    transition: .3s;
    font-family: "mukta";
    :hover{
        background-image: linear-gradient(90deg, rgba(121,48,190,0.648) 100%, rgba(130,87,230,0.8) .2%);
        transform: scale(0.95);
    }

`;
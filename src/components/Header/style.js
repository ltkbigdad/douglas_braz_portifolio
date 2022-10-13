import styled from 'styled-components'

export const Container = styled.div`
    border-bottom: 1px solid var(--purple-300);
    display: flex;
    align-items: center;    
    height: 3.5em;
    justify-content: space-around;

    .logo{
        font-size: 2em;
        font-weight: 700;
        margin-left: 5px;
        background-image: linear-gradient(to bottom, #a40ee4, #8257e6, #13131f);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        color: black;
    }

    svg{
        color: var(--purple-300);  
        margin-left: 9em;
        width: 2em;
        height: 2em;
        :hover{
            cursor: pointer;
            color: var(--purple-700);
        }
       
    }

    .menu{
        display: none;       
    }

    @media(min-width: 767px){
        svg{
            display: none;
        }

        .menu{
            display: flex;
            margin-left: 15em;
        }

        .menuLista{
            margin: 5px;
            font-size: 1.2em;
            color: var(--purple-300);
            :hover{
                cursor: pointer;
                color: var(--purple-700);
            }
        }
    }



`;
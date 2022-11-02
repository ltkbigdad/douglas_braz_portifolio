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
        /* margin-left: 5px; */
        background-image: linear-gradient(to bottom, #a40ee4, #8257e6, #13131f);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        color: black;
    }

    svg{
        display: block;
        color: var(--purple-300);  
        /* margin-left: 9em; */
        width: 2em;
        height: 2em;
        :hover{
            cursor: pointer;
            color: var(--purple-700);
        }
       
    }

   

    .menuMobile{
        display: flex;
        flex-direction: column;
        position: absolute;
        background: #13131f;        
        top: 9vh;
        width: 50vw;
        height: 92vh;
        align-items: center;
        justify-content: space-evenly;
        transform: translateX(49%);
        /* border: 1px solid red; */
    }

    .menuListMobile{
            margin: 1px;
            font-size: 1.2em;
            color:var(--purple-300);
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

        .menuMobile{
            display: none;
        }

        .menuList{
            margin: 5px;
            font-size: 1.2em;
            color:var(--purple-300);
            :hover{
                cursor: pointer;
                color: var(--purple-700);
            }
        }
    }



`;

export const MenuContainer = styled.div`
    height: 100vh;
    background: none;
    border: 2px solid red;
`;
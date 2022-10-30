import React from 'react';

import {Background} from "./style";

export const Backgroundbox = ({theme = "student"}) => {
    return(
        <Background>
            <ul>
                    <li className='boxAnimated'></li>
                    <li className='boxAnimated'></li>
                    <li className='boxAnimated'></li>
                    <li className='boxAnimated'></li>
                    <li className='boxAnimated'></li>
                    <li className='boxAnimated'></li>
                    <li className='boxAnimated'></li>
                    <li className='boxAnimated'></li>
                    <li className='boxAnimated'></li>
                    <li className='boxAnimated'></li>
            </ul>
        </Background>
    
    )
}
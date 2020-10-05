import React from 'react';
import styled from 'styled-components'
import { Search } from 'styled-icons/boxicons-regular'

import './style.css'


const SearchIcon = styled(Search)`
    width: 15px;
`


function Input(){
    return(
        <div className="input-block">   
            <input type="text" value ='Search artist, playlist or tracks' />
        </div>
    )
}

export default Input;
import styled from 'styled-components'
import {Settings} from 'styled-icons/feather'


export const Button = styled.button`

    display: flex;
    align-items: center;
   
   margin-top: 20%;

 img{
     width: 30%;
     margin: 8px;
     border-radius: 10px;
 }

    color:#e5e5e5e7;
    background-color: #040517; 
  

    font-weight: bold;

    p{
        display:flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content:space-around;
    }
`



export const Edit = styled.p`
    color:#e5e5e5e7;

    .edit{
        color:gray;
    }

`

export const SettingIcon= styled(Settings)`
    color:gray;
    cursor:pointer;
    width: 5%;
    margin-top: 5%;
`
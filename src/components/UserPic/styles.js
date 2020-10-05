import styled from 'styled-components'
import {Settings} from 'styled-icons/feather'


export const Button = styled.button`

    display: flex;
    align-items: center;
    justify-content:center;
   
    margin-top: 20%;

    cursor:pointer;

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

    width: 5%;
    margin-top: 7%;
`

export const Separator = styled.div`

    margin:25%;

    height: 8px;
    width: 50%;

    border-bottom: 2px solid rgb(32, 15, 86);

    margin-top: 100px;
    margin-bottom: 20px; 
    
`
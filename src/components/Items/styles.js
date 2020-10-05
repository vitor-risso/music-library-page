import styled from 'styled-components'
import { RemoveRedEye } from 'styled-icons/material-outlined'
import { News } from 'styled-icons/boxicons-regular'
import { Music } from 'styled-icons/boxicons-regular'
import { SignalTower } from 'styled-icons/remix-fill'

export const Container = styled.div`
   color: gray;

    margin:25%;
    width:50%;


    font-size: 150%;
`

export const Button = styled.button`

    display:flex;
    align-items:center;
    justify-content:space-around;
    padding: 0px 0px 5px 0px;

    margin-top:0;

    background-color: rgba(0, 0, 0, 0);
    color: #e5e5e5e7;

    cursor:pointer;
`

export const OverviewIcon = styled(RemoveRedEye)`
    width: 24px;

`


export const NewsIcon = styled(News)`
    width: 24px;
`

export const MusicIcon = styled(Music)`
    width: 24px;
`

export const DiscoverIcon = styled(SignalTower)`
    width: 24px;

`
import styled from 'styled-components';
import { Adjustments } from 'styled-icons/heroicons-solid';
import { MessageSquare, Bell } from 'styled-icons/boxicons-regular';
import { PersonOutline } from 'styled-icons/evaicons-outline';

export const Container = styled.div`
   color: gray;

    margin:25%;
    width:50%;

    font-size: 20px;

    font-size: 150%;
`


export const Button = styled.button`

    display: flex;
    align-items:center;
    justify-content: space-around;
    background-color: rgba(0, 0, 0, 0);

    padding: 0px 0px 5px 0px;
    margin-top: 0;

    color: #e5e5e7;

    cursor:pointer;

`

export const DashboardIcon = styled(Adjustments)`
    width:24px;
`
export const MessageIcon = styled(MessageSquare)`
    width:24px;
`
export const NotificationIcon = styled(Bell)`
    width:24px;
`

export const AccountIcon = styled(PersonOutline)`
    width:24px;
`
import React from 'react';

import UserPic from '../UserPic'
import Items from '../Items'

import {Container } from './styles'

function UserArea(){
    return(
        <Container> 
            <UserPic /> 

            <Items />
        </Container>
    );

}

export default UserArea
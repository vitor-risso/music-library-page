import React from 'react';

import UserPic from '../UserPic';
// import Separator from '../Separator';
import Items from '../Items';
import ItemsT from '../ItemsT';

import {Container } from './styles'

function UserArea(){
    return(
        <Container> 
            <UserPic /> 

            
            <Items />
            <ItemsT />

        </Container>
    );

}

export default UserArea
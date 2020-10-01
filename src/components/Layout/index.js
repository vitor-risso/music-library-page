import React from 'react';

import UserArea from '../UserArea'

import MusicList from '../MusicList'

import {Grid} from './styles'

function Layout (){
    return(
        <Grid>
            <UserArea />
            <MusicList />
            
        </Grid>
    )
}

export default Layout;
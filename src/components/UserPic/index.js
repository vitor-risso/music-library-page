import React from 'react';

import ProfilePic from '../../assets/profile.jpg'


import {Button, Edit, SettingIcon, Separator} from './styles'

function UserPic(){
    return( 
        <>
            <Button>
                <img src={ProfilePic} alt={ProfilePic} />
                <Edit> 
                    <h3>Dany schudler</h3>
        
                    <p className='edit'>Edit profile </p>
                </Edit> 
                <SettingIcon />
            </Button>
            <Separator />
        </>
    );
}

export default UserPic;
import React from 'react';

import ProfilePic from '../../assets/profile.jpg'


import {Button, Edit, SettingIcon} from './styles'

function UserPic(){
    return( 
        <Button>
            <img src={ProfilePic} alt={ProfilePic} />
            <Edit> 
                <h3>Dany schudler</h3>
        
                <p className='edit'>Edit Editrofile </p>
            </Edit> 
            <SettingIcon />
        </Button>
    );
}

export default UserPic;
import React from 'react'

import { Container, Button, DashboardIcon, MessageIcon, NotificationIcon, AccountIcon} from './styles'

function ItemsT(){
    return(
        <Container>
            <Button>
                <DashboardIcon />
                <p>Dashboard</p>
            </Button>

            <Button>
                <MessageIcon />
                <p>Message</p>
            </Button>

            <Button>
                <NotificationIcon />
                <p>Notifications</p>
            </Button>
            
            <Button>
                <AccountIcon />
                <p>Account</p>
            </Button>
        </Container>
    );
}

export default ItemsT;
import React from 'react'

import {Container, Button, OverviewIcon,  NewsIcon, MusicIcon, DiscoverIcon} from './styles'

function Items(){
    return(
        <Container>

             <Button>
                <OverviewIcon />
                <p>Overview</p>
            </Button>

            <Button>
                <NewsIcon />
                <p>News</p>
            </Button>

            <Button>
                <MusicIcon />
                <p>Music</p>
            </Button>

            <Button>
                <DiscoverIcon />
                <p>Discover</p>
            </Button>

            
        </Container>
    );
}

export default Items;
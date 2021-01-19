import React from 'react'
import GlobalStyles from '../../styles/GlobalStyles'

import { Container, Logo, Movies, Trending, Search } from './styles'

const Header = React.FC = () => {
    return (
        <Container>
            <Logo>
                <img src="" alt=""/>
            </Logo>
            <Trending>Trending</Trending>
            <Movies>Movies</Movies>
            <Search>
                <input placeholder="Buscar filmes" />
            </Search>
            
        </Container>
    )
}

export default Header
import React from 'react'
import GlobalStyles from '../../styles/GlobalStyles'

import { Container, Logo, Movies, Series, Search } from './styles'

const Header = React.FC = () => {
    return (
        <Container>
            <Logo />
            <Movies>Movies</Movies>
            <Series>Series</Series>
            <Search>
                <input placeholder="Buscar filmes" />
            </Search>
            
        </Container>
    )
}

export default Header
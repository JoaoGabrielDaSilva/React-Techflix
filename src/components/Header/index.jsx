import React from 'react'
import GlobalStyles from '../../styles/GlobalStyles'

import { Container, Logo, Movies, Trending, Search } from './styles'

import { Link } from 'react-router-dom'

import logo from '../../Images/logo.png'
import GetSearchData from './getSeachData'

const Header = React.FC = () => {

    return (
        <Container>
            <Logo>
                <img src={logo} alt=""/>
            </Logo>
            <Trending>
                <li><Link to={'/'}>Trending</Link></li>
            </Trending>
            <Movies>
                <li><Link to={'/movies'}>Movies</Link></li>
            </Movies>
            <Search>
                <input onKeyUp={(event) => GetSearchData(event)} placeholder="Buscar filmes" />
            </Search>
            
        </Container>
    )
}

export default Header
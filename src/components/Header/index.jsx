import React, { useState } from 'react'

import { Container, Logo, Movies, Trending, Search } from './styles'

import { Link } from 'react-router-dom'

import logo from '../../Images/logo.png'

const Header = () => {

    const [data, setData] = useState([])

    function GetInputData(event) {
        if (event.key === 'Enter') {
            event.preventDefault()
        }
        setData(event.target.value)
    }
    
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
                <input onKeyUp={(event) => GetInputData(event)} placeholder="Buscar filmes" />
                <Link to={`/movies/search?name=${data}`}><button>Buscar</button></Link>
            </Search>
        </Container>
    )
}

export default Header
import React, { useState } from 'react'

import { Container, Logo, Menu, Buttons, Movies, Trending, Search } from './styles'

import { Link } from 'react-router-dom'

import logo from '../../Images/logo.png'


const Header = (props) => {

    const [data, setData] = useState([])

    function GetInputData(event) {
        if (event.key === 'Enter') {
            event.preventDefault()
        }
        setData(event.target.value)
    }
    
    return (
        <Container>
            <Logo className="header">
                <img src={logo} alt=""/>
            </Logo>
            <Menu>
                <Buttons>
                    <Trending className="trending">
                        <li><Link to={'/'}>Trending</Link></li>
                    </Trending>
                    <Movies className="movies"> 
                        <li><Link to={'/movies'}>Movies</Link></li>
                    </Movies>
                    <Search>
                        <input onKeyUp={(event) => GetInputData(event)} placeholder="Buscar filmes" />
                        <Link to={`/movies/search?name=${data}`}><button>Buscar</button></Link>
                    </Search>
                </Buttons>
            </Menu>
        </Container>
    )
}

export default Header
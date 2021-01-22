import React, { useState } from 'react'

import { Container, Logo, Menu, Movies, Trending, Search, DropDownMenu } from './styles'

import { Link } from 'react-router-dom'

import logo from '../../Images/logo.png'


const Header = (props) => {


    const [data, setData] = useState([])
    const [open, setOpen] = useState(false)

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
            <Menu>
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
            </Menu>
        </Container>
    )
}

export default Header
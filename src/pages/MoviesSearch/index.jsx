import React, { useEffect, useState } from 'react'
import { Container, Main, List } from './styles'
import axios from 'axios'

import Card from '../../components/Card/index'

import { useLocation } from 'react-router-dom'

const MoviesSearch = ( props ) => {

    const query = useLocation().search.toString().replace('?name=', '')

    useEffect(() => {
        const url = 'https://api.themoviedb.org/3/discover/movie'
        axios.get()


    }, [])

    return (
        <Container>
            <Main>
                <List>
                    
                </List>
            </Main>
        </Container>
    )
}

export default MoviesSearch
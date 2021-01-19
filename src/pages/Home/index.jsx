import React, { Component, useEffect } from 'react'
import axios from 'axios'

import { Container, Main, List } from './styles'

import Card from '../../components/Card/index'


const Home = React.FC = () => {

    useEffect(() => {
        console.log('s')
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

export default Home
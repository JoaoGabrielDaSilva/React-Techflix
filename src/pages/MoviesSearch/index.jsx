import React from 'react'
import { Container, Main, List } from './styles'

import Card from '../../components/Card/index'

const MoviesSearch = React.Fc = () => {
    return (
        <Container>
            <Main>
                <List>
                    <Card/>
                    
                </List>
            </Main>
        </Container>
    )
}

export default MoviesSearch
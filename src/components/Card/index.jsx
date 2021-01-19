import React from 'react'
import { Container, MovieImage, MovieInfo } from './styles'

import MovieServices from '../../Services/MovieServices'

const Card = React.FC = (info) => {

    return (
        <Container>
            <MovieImage>
                <img src="" alt=""/>
            </MovieImage>
            <MovieInfo>
                <h3>{info.name}</h3>
                <h6></h6>
            </MovieInfo>
        </Container>
    )
}

export default Card
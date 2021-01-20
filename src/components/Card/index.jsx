import React from 'react'
import { Container, MovieImage, MovieInfo } from './styles'

const Card = React.FC = (info) => {

    return (
        <Container>
            <MovieImage>
                <img src={info.image} alt=""/>
            </MovieImage>
            <MovieInfo>
                <h3>{info.name}</h3>
                <h6>{info.date}</h6>
            </MovieInfo>
        </Container>
    )
}

export default Card
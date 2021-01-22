import React from 'react'
import { Container, MovieImage, MovieInfo } from './styles'

import { Link } from 'react-router-dom'

import notFound from '../../Images/not_found.png'

const Card = React.FC = (info) => {



    return (
        <Container>
            <Link to={`/movie/details/${info.id}`}>
                <MovieImage>
                    <img src={info.image || notFound} alt=""/>
                </MovieImage>
                <MovieInfo>
                    <h3>{info.name}</h3>
                    <h6>{info.date}</h6>
                </MovieInfo>
            </Link>
        </Container>
    )
}

export default Card
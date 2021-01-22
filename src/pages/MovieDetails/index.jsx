import React, { useState, useEffect }from 'react'
import axios from 'axios'
import { Container, Main, LeftSide, ImageContainer, RightSide, InfoContainer } from './styles'

import DateHelper from '../Home/dateHelper'

import { useParams, Link } from 'react-router-dom'

import notFound from '../../Images/not_found.png'

const MovieDetails = () => {

    function GetInfo() {
        const { id } = useParams()
        const [currentData, setData] = useState([])

        useEffect(() => {
            const url = `https://api.themoviedb.org/3/movie/${id}?api_key=dfca496b57994b17cd605b1ed8862140`
            
            axios.get(url)
            .then(response => {
                console.log(response)
                const info = {
                    id: response.data.id,
                    name: response.data.original_title || response.data.original_name,
                    image: response.data.poster_path ? `http://image.tmdb.org/t/p/w500${response.data.poster_path}` : notFound,
                    date: DateHelper(response.data.release_date || response.data.first_air_date),
                    note: response.data.vote_average,
                    description: response.data.overview
                }

                setData(info)
                
            })
            .catch()
            
        }, [id])
        if (currentData) {
            return currentData
        }
    }

    const request = GetInfo()
    return (
        <Container>
            <Main>
                <LeftSide>
                    <ImageContainer>
                        <img src={`${request.image}`} alt=""/>
                    </ImageContainer>
                        <h5>{request.date}</h5>
                </LeftSide>
                <RightSide>
                    <Link to='/'><button>Voltar</button></Link>
                    <InfoContainer>
                        <h1>{request.name}</h1>
                        <p>{request.description}</p>
                    </InfoContainer>
                </RightSide>
            </Main>
        </Container>
    )
}

export default MovieDetails
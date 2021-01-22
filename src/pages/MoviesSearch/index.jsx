import React, { useEffect, useState } from 'react'
import { Container, Main, List } from './styles'
import axios from 'axios'

import Card from '../../components/Card/index'
import dateHelper from '../Home/dateHelper'

import { useLocation } from 'react-router-dom'

const MoviesSearch = ( props ) => {

    const query = useLocation().search.toString().replace('?name=', '')
    const [cardInfo, setCardInfo] = useState()
    const cardArray = []

    function FetchData() {

        const [data, setData] = useState([])
    
        useEffect(() => {
            const dataArray = []
            const url = `https://api.themoviedb.org/3/search/movie?api_key=dfca496b57994b17cd605b1ed8862140&query=${query}`
            axios.get(url)
                .then(response => {
    
                    const data = response.data.results
    
                    data.sort((a, b) => a.vote_average - b.vote_average)
    
                    data.forEach(item => {

                        const info = {
                            id: item.id, 
                            name: item.original_title || item.original_name,
                            image: item.poster_path ? `http://image.tmdb.org/t/p/w500${item.poster_path}` : null,
                            date: dateHelper(item.release_date || item.first_air_date)
                        }
    
                        dataArray.push(info)
                        
                    })
                    setData(dataArray)
                })
        
        }, [query])
    
        return data
    }

    const request = FetchData()

    return (
        <Container>
            <Main>
                <List>
                    {request.map(item => <Card key={item.id} id={item.id} name={item.name} image={item.image} date={item.date}/>)}
                </List>
            </Main>
        </Container>
    )
}

export default MoviesSearch
import React, { useEffect, useState } from 'react'

import { Container, Main, List } from './styles'
import axios from 'axios'

import dateHelper from '../Home/dateHelper'

import Card from '../../components/Card/index'

const Movie = React.FC = () => {

    function FetchData() {

        const [data, setData] = useState([])
    
        useEffect(() => {
            const dataArray = []
            const url = 'https://api.themoviedb.org/3/movie/popular?api_key=dfca496b57994b17cd605b1ed8862140'
            axios.get(url)
                .then(response => {
    
                    const data = response.data.results
    
                    data.sort((a, b) => a.vote_average - b.vote_average)
    
                    data.forEach(item => {

                        const info = {
                            id: item.id, 
                            name: item.original_title || item.original_name,
                            image: `http://image.tmdb.org/t/p/w500${item.poster_path}`,
                            date: dateHelper(item.release_date || item.first_air_date)
                        }
    
                        dataArray.push(info)
                        
                    })
                    setData(dataArray)
                })
        
        }, [])
    
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

export default Movie
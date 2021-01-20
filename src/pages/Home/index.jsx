import React, {useEffect, useState } from 'react'
import axios from 'axios'

import { Container, Main, List } from './styles'

import Card from '../../components/Card/index'

import FetchData from './fetch'


const Home = React.FC = () => {

    function FetchData() {

        const [data, setData] = useState([])
    
        useEffect(() => {
            const dataArray = []
            const url = 'https://api.themoviedb.org/3/trending/all/day?api_key=dfca496b57994b17cd605b1ed8862140'
            axios.get(url)
                .then(response => {
    
                    const data = response.data.results
    
                    data.sort((a, b) => a.vote_average - b.vote_average)
    
                    data.forEach(item => {
                        const info = {
                            id: item.id, 
                            name: item.original_title || item.original_name
                        }
    
                        dataArray.push(info)
                        
                    })
                    setData(dataArray)
                })
        
        }, [])
    
        return data
    }

    const request = FetchData()
    console.log(request)
    
    return (
        <Container>
            <Main>
                <List>
                    {request.map(item => <Card key={item.id} name={item.name}/>)}
                </List>
            </Main>
        </Container>
    )
}

export default Home
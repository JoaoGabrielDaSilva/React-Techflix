import React, { useEffect, useState} from 'react'
import axios from 'axios'

export default function FetchData() {

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
                        name: item.original_title || item.original_name
                    }

                    dataArray.push(info)
                    
                })
                setData(dataArray)
            })
    
    }, [])

    return data
}
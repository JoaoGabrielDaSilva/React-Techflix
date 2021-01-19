import axios from 'axios'
import MovieController from '../Controllers/MovieController'

class MovieServices {
    constructor() {

    }

    async getCardInfo() {
        const info = await MovieController.getTrendingResults()

        const dataArray = []

        info.forEach(item => {
            const data = {
                name: item.original_title,
                date: item.release_date,
                image: item.poster_path,
                note: item.vote_average
            }

            dataArray.push(data)
        });
        return dataArray
    }

}

export default new MovieServices
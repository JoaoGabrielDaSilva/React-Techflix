import axios from 'axios'

class MovieController {
    constructor() {
        this.base_url = 'https://api.themoviedb.org/3'
        this.api_key = 'dfca496b57994b17cd605b1ed8862140'
    }

    async getTrendingResults() {

        const url = `${this.base_url}/trending/movie/day?api_key=${this.api_key}`

        const info = await axios.get(url)
        .then(response => {
            const { results } = response.data

            results.sort((a, b) => a.vote_average - b.vote_average).reverse()

            return results
        })
        .catch()
        return info
    }
}

export default new MovieController
import { useState, useEffect } from "react"
import { APIKey, url_movie, url_serie } from "../config/api"
import Card from "../components/Card"
import { Container } from "../style/Container"
import { List } from "../style/List"

function Home(){
    const [movies, setMovies] = useState([])
    const [series, setSeries] = useState([])

    const connectMovie = async(url) => {
        const response = await fetch(url)
        const data = await response.json()

        setMovies(data.results)
    }

    const connectSerie = async(url) => {
        const response = await fetch(url)
        const data = await response.json()

        setSeries(data.results)
    }

    useEffect(() => {
        const popularMovie = `${url_movie}popular?${APIKey}`
        connectMovie(popularMovie)

        const popularSerie = `${url_serie}popular?${APIKey}`
        connectSerie(popularSerie)
    }, [])

    return(
        <Container>
            <h2> Confira os filmes populares</h2>
            <List className="home">
                {movies.map(movie => <Card key={movie.id} obj={movie} type="movies" />)}
            </List>

            <h2>Confira as séries populares</h2>
            <List className="home">
                {series.map(serie => <Card key={serie.id} obj={serie} type="series" />)}
            </List>
        </Container>
    )
}

export default Home
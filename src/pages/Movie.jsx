import { useState, useEffect } from "react"
import { APIKey, url_movie } from "../config/api"
import Card from "../components/Card"
import { Container } from "../style/Container"
import { List } from "../style/List"

function Movie(){
    const [movies, setMovies] = useState([])

    const connectMovie = async(url) => {
        const response = await fetch(url)
        const data = await response.json()

        setMovies(data.results)
    }

    useEffect(() => {
        const popularMovie = `${url_movie}popular?${APIKey}`
        connectMovie(popularMovie)
    }, [])

    return(
        <Container>
            <h2>Lista de Filmes</h2>
            <List>
                {movies.map(movie => <Card key={movie.id} obj={movie} type="movies" />)}
            </List>
        </Container>
    )
}

export default Movie
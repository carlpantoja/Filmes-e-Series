import { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import { APIKey, movie_search, serie_search } from "../config/api"
import Card from "../components/Card"
import { Container } from "../style/Container"
import { List } from "../style/List"

function Search(){
    const [searchParams] = useSearchParams()
    const [movies, setMovies] = useState([])
    const [series, setSeries] = useState([])
    const query = searchParams.get("q")

    const getSearchMovie = async(url) => {
        const response = await fetch(url)
        const data = await response.json()

        setMovies(data.results)
    }

    const getSearchSerie = async(url) => {
        const response = await fetch(url)
        const data = await response.json()

        setSeries(data.results)
    }

    useEffect(() => {
        const movieSearch = `${movie_search}${APIKey}&query=${query}`
        getSearchMovie(movieSearch)

        const serieSearch = `${serie_search}${APIKey}&query=${query}`
        getSearchSerie(serieSearch)
    }, [query])

    return(
        <Container>
            <h2>Resultados para: {query}</h2>
            <List>
                {movies.map(movie => <Card key={movie.id} obj={movie} type="movies" />)}
                {series.map(serie => <Card key={serie.id} obj={serie} type="series" />)}
            </List>
        </Container>
    )
}

export default Search
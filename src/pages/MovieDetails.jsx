import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { APIKey, url_image, url_movie } from "../config/api"
import Details from "../components/Details"

function MovieDetails(){
    const {id} = useParams()
    const [movies, setMovies] = useState({})

    const connectMovie = async(url) => {
        const response = await fetch(url)
        const data = await response.json()

        const genres = data.genres.map(obj => {return obj.name})
        const production_by = data.production_companies.map(obj => {return obj.name})

        const movie = {
            title: data.title,
            sinopse: data.overview,
            genre: `${genres}`,
            image: `${url_image}${data.poster_path}`,
            release: data.release_date,
            runtime: data.runtime,
            production_by: `${production_by}`
        }

        setMovies(movie)
    }

    useEffect(() => {
        const url = `${url_movie}${id}?${APIKey}`
        connectMovie(url)
    }, [id])

    return(
        <Details obj={movies}/>
    )
}

export default MovieDetails
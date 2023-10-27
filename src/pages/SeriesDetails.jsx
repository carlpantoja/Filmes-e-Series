import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { APIKey, url_image, url_serie } from "../config/api"
import Details from "../components/Details"

function SeriesDetails(){
    const {id} = useParams()
    const [series, setSeries] = useState({})

    const connectSerie = async(url) => {
        const response = await fetch(url)
        const data = await response.json()

        const genre = data.genres.map(obj => {return obj.name})
        const production_by = data.production_companies.map(obj => {return obj.name})

        const serie = {
            title: data.name,
            season: data.number_of_seasons,
            ep: data.number_of_episodes,
            sinopse: data.overview,
            genre: `${genre}`,
            image: `${url_image}${data.poster_path}`,
            release: data.first_air_date,
            runtime: data.episode_run_time,
            production_by: `${production_by}`
        }
            setSeries(serie)
    }

    useEffect(() => {
        const url = `${url_serie}${id}?${APIKey}`
        connectSerie(url)
    }, [id])

    return(
        <Details obj={series}/>
    )
}

export default SeriesDetails
import { useState, useEffect } from "react"
import { APIKey, url_serie } from "../config/api"
import Card from "../components/Card"
import { Container } from "../style/Container"
import { List } from "../style/List"

function Series(){
    const [series, setSeries] = useState([])

    const connectSerie = async(url) => {
        const response = await fetch(url)
        const data = await response.json()

        setSeries(data.results)
    }

    useEffect(() => {
        const popularSerie = `${url_serie}popular?${APIKey}`
        connectSerie(popularSerie)
    }, [])
    
    return(
        <Container>
            <h2>Lista de Séries</h2>
            <List>
                {series.map(serie => <Card key={serie.id} obj={serie} type="series" />)}
            </List>
        </Container>
    )
}

export default Series
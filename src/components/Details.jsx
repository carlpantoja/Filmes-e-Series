import { Container } from "../style/Container"

const Details = (obj) => {
    return(
        <Container>
            <h2>{obj.obj.title}</h2>
            <h3>Gênero: {obj.obj.genre}</h3>
            <h3>Sinopse: {obj.obj.sinopse}</h3>
            <div className="capa">
                <img src={obj.obj.image} alt={obj.obj.title} />
                <div className="moreInfo">
                    {obj.obj.season ? <h3>Nº de Temporadas: {obj.obj.season}</h3>: ""}
                    {obj.obj.ep ? <h3>Nº de Episódios: {obj.obj.ep}</h3> : ""}
                    <h3>Produção: {obj.obj.production_by}</h3>
                    <h3>Duração: {obj.obj.runtime} min</h3>
                    <h3>Data de Lançamento: {obj.obj.release}</h3>
                </div>
            </div>
        </Container>
    )
}

export default Details
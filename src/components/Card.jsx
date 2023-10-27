import { Link } from "react-router-dom"
import { url_image } from "../config/api"
import { Item } from "../style/Item"

const Card = (obj) => {
    return(
        <Item>
            <Link to={`/${obj.type}/details/${obj.obj.id}`}><img src={`${url_image}${obj.obj.poster_path}`} alt={obj.obj.title || obj.obj.name} /></Link>
            <span>{obj.obj.title || obj.obj.name}</span>
        </Item>
    )
}

export default Card
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Navbar } from "../style/Navbar"
import { Item } from "../style/Item"

function Menu(){
    const [search, setSearch] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        
        if(!search) return

        navigate(`/search?q=${search}`)
        setSearch("")
    }

    return(
        <header>
            <Navbar>
                <Item><h1><Link to={'/'}>Home</Link></h1></Item>
                <Item><Link to={"/movies"}>Filmes</Link></Item>
                <Item><Link to={"/series"}>Séries</Link></Item>
                <Item className="right-side">
                    <form onSubmit={handleSubmit}>
                        <input id="search-input" type="search" placeholder="Busque um filme ou série" onChange={(e) => setSearch(e.target.value)} value={search}/>
                        <button type="submit"><i className="fa fa-search" /></button>
                    </form>
                </Item>
            </Navbar>
        </header>
    )
}

export default Menu
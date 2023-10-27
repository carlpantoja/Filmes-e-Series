function Footer(){
    const image = [
        {
            id: 1,
            icon: "fa fa-facebook-square"
        },
        {
            id: 2,
            icon: "fa fa-instagram"
        },
        {
            id: 3,
            icon: "fa fa-twitter"
        }
    ]

    return(
        <footer>
            <h2>Nossas Redes: </h2>
            <div>
                {image.map(img => {
                    return(
                        <span key={img.id}><i className={img.icon} /></span>
                    )
                })}
            </div>
            
        </footer>
    )
}

export default Footer
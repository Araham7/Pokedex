import "./Pokemon.css";

function Pokemon({ name , image }) {
    return(
        <div className="pokemon-container">

            <div>
                <img className="pokemon-image" src={image} alt={image} />
            </div>

            <div className="pokemon-name-container">
                {name}
            </div>

        </div>
    )
}

export default Pokemon;
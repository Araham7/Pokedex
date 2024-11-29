import "./Pokemon.css";

function Pokemon({ name , image }) {
    return(
        <div className="pokemon-container">
            {/* Pokemon-image */}
            <div>
                <img className="pokemon-image" src={image} alt={image} />
            </div>

            {/* Pokemon--name */}
            <div className="pokemon-name-container">
                {name}
            </div>

        </div>
    )
}

export default Pokemon;
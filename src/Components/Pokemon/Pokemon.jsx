import { Link } from "react-router-dom";
import "./Pokemon.css";

function Pokemon({ name , image , id }) {
    return(
        <div className="pokemon-container">

            <Link to={`/pokemon/${id}`}>
                {/* (1). Pokemon-image */}
            <div>
                <img className="pokemon-image" src={image} alt={id} />
            </div>

                {/* (2). Pokemon--name */}
            <div className="pokemon-name-container">
                {name}
            </div>
            </Link>

        </div>
    )
}

export default Pokemon;
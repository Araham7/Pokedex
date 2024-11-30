import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./PokemonDetails.css";

function PokemonDetails() {
    const { id } = useParams();
    const [pokemonDetails, setPokemonDetails] = useState({});

    async function downloadPokemonDetails() {
        try {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`);
            console.log(response.data);
            setPokemonDetails({
                name: response.data.name,
                height: response.data.height,
                weight: response.data.weight,
                id: response.data.id,
                img_url: response.data.sprites.other.dream_world.front_default,
                type: response.data.types.map((t) => t.type.name),
            });
        } catch (error) {
            console.error("Error fetching Pokémon details:", error);
        }
    }

    useEffect(() => {
        downloadPokemonDetails();
    }, [id]);

    return (
        <div className="pokemon-details-wraper">
            {/* Pokemon Image */}
            <div className="pokemon-image-container">
                <img src={pokemonDetails.img_url} alt={pokemonDetails.name} />
            </div>

            {/* Pokemon Name */}
            <h1 className="single-pokemon-name-container">{pokemonDetails.name}</h1>

            {/* Pokemon Height */}
            <div>
                <b>Height</b>: <span className="pokemon-property">{pokemonDetails.height}</span>
            </div>

            {/* Pokemon Weight */}
            <div>
                <b>Weight</b>: <span className="pokemon-property">{pokemonDetails.weight}</span>
            </div>

            {/* Pokemon Type */}
            <div className="type-wraper">
                <b>Type:</b> {pokemonDetails.type?.map((typ) => (
                    <span key={typ}className="pokemon-property-type">{typ}</span>
                ))}
            </div>
        </div>
    );
}

export default PokemonDetails;

import { useContext } from "react";
import { ObserverContext } from "../../../contexts/observerContext";
import { IPokemon } from "../../../interfaces/IPokemon";

interface PokemonItem {
  pokemon: IPokemon;
}

export default function PokemonItem({ pokemon }: PokemonItem) {
  const { pokemonObserver } = useContext(ObserverContext);

  return (
    <article
      className="itemPokemon"
      onClick={() => pokemonObserver.deletePokemonId(pokemon.id)}
    >
      <p>{pokemon.name}</p>

      <section>
        <ul>
          <li>hp : {pokemon.stats.HP}</li>
          <li>attack : {pokemon.stats.attack}</li>
          <li>defense : {pokemon.stats.defense}</li>
          <li>attack special : {pokemon.stats.special_attack}</li>
          <li>defense special : {pokemon.stats.special_defense}</li>
          <li>speed : {pokemon.stats.speed}</li>
        </ul>

        <img src={pokemon.image} />
      </section>
      <ul className="pokemonType">
        {pokemon.apiTypes.map((type) => (
          <li>{type.name}</li>
        ))}
      </ul>
    </article>
  );
}

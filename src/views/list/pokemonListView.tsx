import { useContext, useEffect, useState } from "react";

import PokemonItem from "./components/pokemonItem";
import "./pokemonList.scss";
import { ObserverContext } from "../../contexts/observerContext";
import { IPokemon } from "../../interfaces/IPokemon";
import { Link } from "react-router-dom";

export default function PokemonListView() {
  const [pokemons, setPokemon] = useState<IPokemon[]>([]);
  const { pokemonObserver } = useContext(ObserverContext);

  useEffect(() => {
    pokemonObserver.subscribe(setPokemon);
    return () => {
      pokemonObserver.unsubscribe(setPokemon);
    };
  }, []);

  return (
    <>
      <nav>
        <Link to={"/"}>Home</Link>
      </nav>
      <div className="pokemonList">
        {pokemons.map((pokemon) => (
          <PokemonItem key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </>
  );
}

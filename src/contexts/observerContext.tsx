import { createContext } from "react";
import PokemonObserver from "../observer/pokemonObserver";

type Props = {
  children: string | JSX.Element | JSX.Element[];
};

const ObserverContext = createContext<{ pokemonObserver: PokemonObserver }>({
  pokemonObserver: new PokemonObserver(),
});

function ObserverContextProvider({ children }: Props) {
  const pokemonObserver = new PokemonObserver();

  return (
    <ObserverContext.Provider value={{ pokemonObserver }}>
      {children}
    </ObserverContext.Provider>
  );
}
export { ObserverContext, ObserverContextProvider };

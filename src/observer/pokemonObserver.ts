import axios from "axios";
import { IPokemon } from "../interfaces/IPokemon";

class PokemonObserver {
  observers: { (data: IPokemon[]): void }[];
  pokemonList: IPokemon[];

  constructor() {
    this.observers = [];
    this.pokemonList = [];
    this.#getPokemon();
  }

  subscribe(setState: (data: IPokemon[]) => void) {
    this.observers.push(setState);

    this.pokemonList && setState([...this.pokemonList]);
  }

  unsubscribe(setState: (data: IPokemon[]) => void) {
    this.observers = this.observers.filter((observer) => observer !== setState);
  }

  notify() {
    this.observers.forEach((observer) => observer([...this.pokemonList]));
  }

  deletePokemonId(pokemonId: number) {
    this.pokemonList = this.pokemonList.filter(
      (pokemon) => pokemon.id != pokemonId
    );

    this.notify();
  }

  #getPokemon(): void {
    axios
      .get("https://pokebuildapi.fr/api/v1/pokemon/limit/100")
      .then((rep) => {
        this.pokemonList.push(...rep.data);
        this.notify();
      });
  }
}

export default PokemonObserver;

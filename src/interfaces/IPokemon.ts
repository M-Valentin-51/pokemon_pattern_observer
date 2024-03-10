export interface IPokemon {
  id: number;
  name: string;
  stats: {
    HP: number;
    attack: number;
    defense: number;
    special_attack: number;
    special_defense: number;
    speed: number;
  };
  image: string;
  apiTypes: ApiType[];
}

type ApiType = {
  name: string;
  image: string;
};

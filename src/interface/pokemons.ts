export interface IPokemons {
    total: number,
    pokemons:PokemonsRequest[],
    name: string,
    stats:any[],
    types:any[],
    img: string,
    limit: number,

}

let pokemonsData = {
    "name_clean":"sandshrew",
    "abilities":["sand-veil","sand-rush"],
    "stats":{"hp":50,"attack":75,"defense":85,"special-attack":20,"special-defense":30,"speed":40},
    "types":["ground"],
    "img":"https:\/\/raw.githubusercontent.com\/PokeAPI\/sprites\/master\/sprites\/pokemon\/other\/official-artwork\/27.png",
    "name":"sandshrew",
    "base_experience":60,
    "height":6,
    "id":27,
    "is_default":true,
    "order":51,
    "weight":120
}

export type PokemonsRequest = typeof pokemonsData;
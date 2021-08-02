import create from 'zustand';
import apiCall from '../../API/index';

const usePokemonsStore = create((set, get) => ({

    getPokemons: async () => {
        try {
            const pokemonResult = await apiCall({ url: 'https://pokeapi.co/api/v2/pokemon?limit=151' });
            set({ pokemons: pokemonResult.results });
        } catch (error) {
            set({ pokemons: [] });
            Promise.reject(error);
        }
    },
    pokemons: [],
    getPokemonData: async (id) => {
        try {
            const pokemonData = await apiCall({ url: `https://pokeapi.co/api/v2/pokemon/${id}/` });
            set({ pokemonData: pokemonData });
        } catch (error) {
            set({ pokemonData: {} });
            Promise.reject(error);
        }
    },
    pokemonData: {},
    getSprite: async (id) => {
        try {
            const sprite = await apiCall({ url: `https://pokeapi.co/api/v2/pokemon/${id}/` });
            set({ sprite: sprite.sprites });
        } catch (error) {
            set({ sprite: {} });
            Promise.reject(error);
        }
    },
    sprite: {}
}));

export default usePokemonsStore;
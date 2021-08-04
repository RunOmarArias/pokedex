import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

import usePokemonsStore from '../../zustand/stores/pokemons';
import PokeStats from './components/PokeStats';

export default function PokeData() {

    const { id } = useParams();

    const { getPokemonData, pokemonData, getSprite, sprite } = usePokemonsStore(state => ({ getPokemonData: state.getPokemonData, pokemonData: state.pokemonData, getSprite: state.getSprite, sprite: state.sprite }));

    useEffect(() => {
        getPokemonData(id).catch(null);
        getSprite(id).catch(null);
    }, []);

    return(
        <>
            <h2>Info</h2>
            <p>{`Name: ${pokemonData?.name}`}</p>
            <figure>
                <img alt="sprite" src={sprite?.front_default}></img>
            </figure>
            <figure>
                <img alt="sprite" src={sprite?.front_shiny}></img>
            </figure>
            <p>{`Height: ${pokemonData?.height} m`}</p>
            <p>{`weight: ${pokemonData?.weight} kg`}</p>
            <h2>stats</h2>
            <PokeStats stats={pokemonData?.stats ?? []} />
        </>
    );
}
import { useEffect } from 'react';

import shallow from 'zustand/shallow';
import usePokemonStore from '../../zustand/stores/pokemons';
import PokeList from '../Home/components/PokeList';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

export default function Home() {

    const {
        getPokemons,
        pokemons,
    } = usePokemonStore(state => ({
        getPokemons: state.getPokemons,
        pokemons: state.pokemons
    }), shallow);

    useEffect(() => {
        getPokemons().catch(null);
    }, []);

    return(
        <>
            <AppBar position="sticky" color="secondary">
                <Toolbar>
                    <Typography variant="h6">
                        Pokédex
                    </Typography>
              </Toolbar>
            </AppBar>
            <PokeList pokemons={pokemons} />
        </>
    );
}
import PokeListItem from './PokeListItem';
import Grid from '@material-ui/core/Grid';

export default function PokeList({ pokemons }) {
    return(
        <Grid container spacing={6}>
            {
                pokemons?.map((pokemon, index) => (
                    <Grid item key={index} xs={3}  >
                        <PokeListItem {...pokemon} />
                    </Grid>
                ))
            }
        </Grid>
    );
}
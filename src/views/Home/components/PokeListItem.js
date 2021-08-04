import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button'
//TODO colocar avatar material-ui para el sprite del pokemon.

export default function PokeListItem( { name, url } ) {

    const getId = () => url.split('/')[6];

    return(
        <>
            <p>{name}</p>
            <Button variant="outlined" size="small" color="primary" >
                <Link to={`/pokemon/${getId()}`}>info</Link>
            </Button>
        </>
    );
}
import PokeListItem from './PokeListItem';


export default function PokeList({ pokemons }) {
    return(
        <>
            {
                pokemons?.map((pokemon, index) => (
                    <PokeListItem key={index} {...pokemon} />
                ))
            }
        </>
    );
}
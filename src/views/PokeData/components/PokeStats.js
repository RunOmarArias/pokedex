//TODO dar estilo a las stats del pokemon.

export default function PokeStats({ stats }) {
    return(
        <>
            {stats.map((value, index) => (
                <div key={index} style={{display: "flex"}}>
                    <p>{value.stat.name}:</p>
                    <p>{value.base_stat}</p>
                </div>
            ))}
        </>
    );
}
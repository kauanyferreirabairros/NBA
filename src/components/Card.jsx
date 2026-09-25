export function Card({jogador}){

    if(!jogador) return null;

    return(
        <div className="card">
            <img src={jogador.foto} alt={jogador.nome} />
            <h3 className="card-titulo">
                {jogador.nome}
            </h3>
        </div>
    )
}
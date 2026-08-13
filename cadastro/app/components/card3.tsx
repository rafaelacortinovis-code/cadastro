interface Card3Props {
    nome_local: string;
    descrição: string;
    utilização: string;
}

export default function Card3({ nome_local, descrição, utilização }: Card3Props) {
    return (
        <div className="simple-card">
            <span className="card-chip">Local</span>
            <h3>{nome_local}</h3>
            <p>{descrição}</p>
            <p>Uso: {utilização}</p>
        </div>
    );
}
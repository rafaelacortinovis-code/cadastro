interface Card1Props {
    nome: string;
    idade: string;
    altura: string;
}

export default function Card1({ nome, idade, altura }: Card1Props) {
    return (
        <div className="simple-card">
            <span className="card-chip">Perfil</span>
            <h3>{nome}</h3>
            <p>Idade: {idade}</p>
            <p>Altura: {altura}</p>
        </div>
    );
}
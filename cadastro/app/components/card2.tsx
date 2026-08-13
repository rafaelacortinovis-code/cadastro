interface Card2Props {
    empresa: string;
    produto: string;
    preço: string;
}

export default function Card2({ empresa, produto, preço }: Card2Props) {
    return (
        <div className="simple-card">
            <span className="card-chip">Empresa</span>
            <h3>{empresa}</h3>
            <p>Produto: {produto}</p>
            <p>Preço: {preço}</p>
        </div>
    );
}
interface cardProps {
    turma: string;
    nome: string;
}

export default function Card({ turma, nome }: cardProps) {
    return (
        <div className="simple-card">
            <span className="card-chip">{turma}</span>
            <h3>{nome}</h3>
            <p>Aluno</p>
        </div>
    );
}
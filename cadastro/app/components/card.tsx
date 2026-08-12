interface cardProps {
    turma: String, 
     nome: String

}

export default function Card({turma,nome}:cardProps) {
     return (
        <>
        <p>{nome}</p>
        <p>{turma}</p>
        </>
     )
}
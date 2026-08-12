'use client';
import { useState } from "react";
import Card from "./components/card";

export default function Home() {
    var alunos = [
        { nome: "Júlia", turma: "idev4" },
        { nome: "Rafa", turma: "idev4" },
        { nome: "Isa", turma: "idev4" },
        { nome: "Zanga", turma: "idev3" },
        { nome: "Boas", turma: "idev3" },
        { nome: "Marques", turma: "idev3" },
        { nome: "Elias", turma: "idev5" },
        { nome: "Cardoso", turma: "idev5" },
        { nome: "Daniel", turma: "idev5" },

    ]
    const [nomeTurma, setNomeTurma] = useState('');

    return (
        <>
            <h1>Bem Vindo a página de alunos</h1>
            <button onClick={() => setNomeTurma('1')}>idev4</button>
            <button onClick={() => setNomeTurma('2')}>idev3</button>
            <button onClick={() => setNomeTurma('3')}>idev5</button>

            {nomeTurma === "1" && (
                <>
                    {alunos.map((aluno, index) => 
                        aluno.turma === 'idev4' && 
                           <Card nome={aluno.nome} turma={aluno.turma}>

                           </Card> 
                    )}
                </>
            )}

              {nomeTurma === "2" && (
                <>
                    {alunos.map((aluno, index) => 
                        aluno.turma === 'idev3' && 
                           <Card nome={aluno.nome} turma={aluno.turma}>

                           </Card> 
                    )}
                </>
            )}

              {nomeTurma === "3" && (
                <>
                    {alunos.map((aluno, index) => 
                        aluno.turma === 'idev5' && 
                           <Card nome={aluno.nome} turma={aluno.turma}>

                           </Card> 
                    )}
                </>
            )}

        </>
    )

}
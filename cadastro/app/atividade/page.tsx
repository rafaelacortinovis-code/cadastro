'use client';
import { useState } from "react";

export default function Informacao() {
    const alunos = [
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
    const [typeButton, setTypeButton] = useState('1');

    return (
        <>
            <h1>Bem Vindo a página de alunos</h1>
            <button onClick={() => setTypeButton('1')}>idev4</button>
            <button onClick={() => setTypeButton('2')}>idev3</button>
            <button onClick={() => setTypeButton('3')}>idev5</button>

            {typeButton === "1" && (
                <ol>
                    {alunos.map((aluno, index) => (
                        aluno.turma === "idev4" && (
                            <div className="card" key={index}>
                                <p>{aluno.nome}</p>
                            </div>
                        )
                    ))}
                </ol>
            )}

             {typeButton === "2" && (
                <ol>
                    {alunos.map((aluno, index) => (
                        aluno.turma === "idev3" && (
                            <div className="card" key={index}>
                                <p>{aluno.nome}</p>
                            </div>
                        )
                    ))}
                </ol>
            )}
             {typeButton === "3" && (
                <ol>
                    {alunos.map((aluno, index) => (
                        aluno.turma === "idev5" && (
                            <div className="card" key={index}>
                                <p>{aluno.nome}</p>
                            </div>
                        )
                    ))}
                </ol>
            )}

        </>
    )

}